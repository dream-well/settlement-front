import { useState } from 'react'
import Layout from "components/Layout"
import TableCard from "components/Tables/TableCard"
import moment from "moment";
import useSWR from 'swr';
import { DateRangePicker, SelectPicker } from 'rsuite'
import { filterDateRange, truncateAddress } from "utils"
import { fetcher } from "utils";

export default function Chargebacks() {
    const { data: info } = useSWR(`/api/systemstatus`, fetcher);
    const { data: rows } = useSWR(`/api/transactions`, fetcher);

    const [dateRange, setDateRange] = useState();
    const filteredRows = rows ? 
        filterDateRange(rows, "processed_at", dateRange)
        .map(row => ({
            ...row,
            amount_to_merchant: (row.status == 2 || row.status == 4) ? 
                row.amount - row.fee_amount - row.rolling_reserve_amount : 0
        }))
        : undefined;
    
    const cols = [
        { text: 'DateTime', value: row => row.timestamp ? moment(row.timestamp * 1000).format('MM/DD/YYYY hh:mm:ss'): "" },
        { text: 'Function', value: 'func'},
        { text: 'Tx ID', type: 'id', value: row => <a target='_blank' href={`${info.explorer}/tx/${row.txHash}`} className='text-[#56f]'>{truncateAddress(row.txHash, 6, 10, 10, '. ')}</a> },
        // { text: 'Arguments', value: row => <div className=''>{JSON.stringify(row.args)}</div> },
    ]

    return (
        <Layout title=" ">
            
            <TableCard
                title='Transactions'
                cols={cols}
                rows={filteredRows}
                isLoading={filteredRows ? false : true}
                className="w-full"
            >
                <div className='flex items-center'>
                    <span className='mr-2'>Filter By Date:</span>
                    <DateRangePicker value={dateRange} onChange={setDateRange}/>
                </div>
            </TableCard>
        </Layout>
    )
}

