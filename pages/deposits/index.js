import Button from "components/Buttons/Button"
import Layout from "components/Layout"
import SearchPanel from "components/SearchPanel"
import TableCard from "components/Tables/TableCard"
import Image from "next/image"
import moment from "moment"
import Chip from 'components/Chips/Chip'
import useSWR from 'swr'
import { filterDateRange, truncateAddress } from "utils"
import { DateRangePicker, Input } from 'rsuite'
import { SelectPicker } from 'rsuite'
import { useState } from 'react'

const fetcher = (url) => fetch(url).then((res) => res.json());


export default function Deposits() {

    const { data: rows, error } = useSWR(`/api/deposits`, fetcher);

    const [dateRange, setDateRange] = useState();
    const [customer, setCustomer] = useState();
    const [status, setStatus] = useState(null);

    const filteredRows = rows ? 
        filterDateRange(rows, "processed_at", dateRange)
        .filter(row => (status === null) ? true : row.status == status) 
        .map(row => ({
            ...row,
            amount_to_merchant: (row.status == 2 || row.status == 4) ? 
                row.amount - row.fee_amount - row.rolling_reserve_amount : 0
        }))
        .reverse() : [];
    

    const lastRow = filteredRows.reduce((_, row) => ({
        processed_at: 'Total',
        amount: _.amount  + row.amount,
        fee_amount: _.fee_amount  + row.fee_amount,
        rolling_reserve_amount: _.rolling_reserve_amount  + row.rolling_reserve_amount,
        amount_to_merchant: _.amount_to_merchant + row.amount_to_merchant
    }), {processed_at: 'Total', amount: 0, fee_amount: 0, rolling_reserve_amount: 0, amount_to_merchant: 0})    

    return (
        <Layout title="Deposits">
            <div className="w-full">
                <TableCard
                    title='Transactions'
                    cols={cols}
                    rows={filteredRows}
                    isLoading={rows ? false : true}
                    className="w-full"
                    lastRow={lastRow}
                >
                    <div className='flex items-center'>
                        <span className='mr-1'>Filter By Date:</span>
                        <DateRangePicker value={dateRange} onChange={setDateRange}/>
                        {/* Filter By Customer: &nbsp;
                        <Input style={{width:200}} value={customer} onChange={setCustomer}/> &nbsp;&nbsp;  */}
                        <span className='ml-4 mr-1'>Filter By Status:</span>
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
    { text: 'Process Date', value: row => typeof row.processed_at == 'number' ? moment(row.processed_at * 1000).format('MM/DD/YYYY hh:mm:ss'): row.processed_at },
    { text: 'Customer ID', value: row => row.customerId ? truncateAddress("0x" + row.customerId, 3) : ''},
    { text: 'Total Amount', value: 'amount'},
    { text: 'Fees', value: 'fee_amount'},
    { text: 'Rolling Reserve', value: 'rolling_reserve_amount'},
    { text: 'Amount to Merchant', value: 'amount_to_merchant'},
    { text: 'Status', value: row => 
        row.status &&
        <div>
            <Chip label={statusList[row.status]} color={colors[statusList[row.status]]} />
        </div>
    },     
    // { text: 'Chargeback', value: 'chargeback'},

]

const statusList = [
    "Init", "NotPaid", "Paid", "Expired", "Chargebacked", "Error", "CriticalError"
]

const colors = {
    Paid: "#97cc50",
    NotPaid: "#f1871b",
    Expired: "#ea566b",
    Chargebacked: "#4898ff",
    pending: "#f1871b",
    Error: "#ea566b",
    CriticalError: "#ea566b"
}
