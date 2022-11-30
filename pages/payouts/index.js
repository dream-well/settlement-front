import { useState } from 'react'
import Layout from "components/Layout"
import TableCard from "components/Tables/TableCard"
import moment from "moment";
import Chip from 'components/Chips/Chip'
import useSWR from 'swr';
import { DateRangePicker, SelectPicker } from 'rsuite'
import { filterDateRange, truncate } from "utils"
import { fetcher } from "utils";
import CopyText from 'components/CopyText';


export default function Payouts() {
    
    const { data: rows, error } = useSWR(`/api/payouts`, fetcher);

    const [dateRange, setDateRange] = useState();
    const [status, setStatus] = useState(null);

    const filteredRows = rows ? 
        filterDateRange(rows, "processed_at", dateRange)
        .filter(row => (status === null) ? true : row.status == status) 
        .map(row => ({
            ...row,
            amount_to_merchant: (row.status == 2 || row.status == 4) ? 
                row.amount - row.fee_amount - row.rolling_reserve_amount : 0
        }))
        : undefined;
    
    const lastRow = filteredRows ? filteredRows.reduce((_, row) => ({
        requestId: 'Total',
        amount: _.amount  + row.amount,
        fee_amount: _.fee_amount  + row.fee_amount,
    }), {requestId: 'Total', amount: 0, fee_amount: 0 }) : undefined;

    return (
        <Layout title="Payouts">
            <div className="w-full">
                <TableCard
                    title='Transactions'
                    cols={cols}
                    rows={filteredRows}
                    isLoading={filteredRows ? false : true}
                    className="w-full"
                    lastRow={lastRow}
                >
                    <div className='flex items-center'>
                        <span className='mr-2'>Filter By Date:</span>
                        <DateRangePicker value={dateRange} onChange={setDateRange}/>
                        <span className='ml-4 mr-2'>Filter By Status:</span>
                        <SelectPicker data={statusList.map((each, i) => ({label: each, value: i}))} searchable={false} style={{ width: 140 }}  
                            value={status}
                            onChange={setStatus}
                        />
                    </div>
                </TableCard>
            </div>
        </Layout>
    )
}

const cols = [
    { text: 'Request ID', value: 'requestId', type: 'id' },
    { text: 'Process Date', value: row => row.processed_at ? moment(row.processed_at * 1000).format('MM/DD/YYYY hh:mm:ss'): "" },
    { text: 'Customer ID', value: row => row.customerId && 
        <CopyText label={truncate(row.customerId, 3)} text={row.customerId} />
    },
    { text: 'Total Amount', value: 'amount'},
    { text: 'Fees', value: 'fee_amount'},
    { text: 'Account Info', value: row => row.accountInfo && 
        <CopyText label={truncate(row.accountInfo, 3, 8)} text={row.accountInfo} />
    },
    { text: 'remark', value: 'remark'},
    { text: 'Status', value: row => 
        row.status &&
        <div>
            <Chip label={statusList[row.status]} color={colors[statusList[row.status]]} />
        </div>
    },     

]

const statusList = [
    "Init", "NotPaid", "Locked", "Paid", "Refunded / Rejected", "CriticalError"
]

const colors = {
    Paid: "#97cc50",
    NotPaid: "#f1871b",
    Expired: "#ea566b",
    Chargebacked: "#4898ff",
    pending: "#f1871b",
    "Refunded / Rejected": "#ea566b",
    CriticalError: "#ea566b"
}
