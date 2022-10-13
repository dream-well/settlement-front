import { useState } from 'react'
import Layout from "components/Layout"
import TableCard from "components/Tables/TableCard"
import moment from "moment";
import Chip from 'components/Chips/Chip'
import useSWR from 'swr';
import { DateRangePicker, SelectPicker } from 'rsuite'
import { filterDateRange, truncateAddress } from "utils"

const fetcher = (url) => fetch(url).then((res) => res.json());


export default function Settlements() {
    
    const { data: rows } = useSWR(`/api/settlements`, fetcher);

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
        : [];
    
    const lastRow = filteredRows.reduce((_, row) => ({
        id: 'Total',
        amount: _.amount  + row.amount,
        fee_amount: _.fee_amount  + row.fee_amount,
        rolling_reserve_amount: _.rolling_reserve_amount  + row.rolling_reserve_amount,
        amount_to_merchant: _.amount_to_merchant + row.amount_to_merchant
    }), {id: 'Total', amount: 0, fee_amount: 0, rolling_reserve_amount: 0, amount_to_merchant: 0})    


    return (
        <Layout title="Settlements  ">
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
    { text: 'Settlement ID', value: 'id' },
    { text: 'Process Date', value: row => row.createdAt ? moment(row.createdAt * 1000).format('MM/DD/YYYY hh:mm:ss'): "" },
    { text: 'Amount', value: 'amount'},
    { text: 'Status', value: row => 
        row.status &&
        <div>
            <Chip label={statusList[row.status]} color={colors[statusList[row.status]]} />
        </div>
    },     
    // { text: 'Chargeback', value: 'chargeback'},

]

const statusList = [
    "Init", "Processed", "Rejected"
]

const colors = {
    Processed: "#97cc50",
    Rejected: "#ea566b",
}
