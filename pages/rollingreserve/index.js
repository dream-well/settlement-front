import { useState } from 'react'
import Layout from "components/Layout"
import TableCard from "components/Tables/TableCard"
import moment from "moment";
import Chip from 'components/Chips/Chip'
import useSWR from 'swr';
import { DateRangePicker, SelectPicker } from 'rsuite'
import { filterDateRange, truncateAddress } from "utils"
import Box from 'components/Boxes/Box'

const fetcher = (url) => fetch(url).then((res) => res.json());


export default function RollingReserve() {
    const { data: rollingreserve } = useSWR(`/api/rollingreserve`, fetcher);
    const { data: rows } = useSWR(`/api/harvests`, fetcher);

    const [dateRange, setDateRange] = useState();
    const filteredRows = rows ? 
        filterDateRange(rows, "processed_at", dateRange)
        .map(row => ({
            ...row,
            amount_to_merchant: (row.status == 2 || row.status == 4) ? 
                row.amount - row.fee_amount - row.rolling_reserve_amount : 0
        }))
        : [];
    
    const lastRow = filteredRows.reduce((_, row) => ({
        timestamp: 'Total',
        amount: _.amount  + row.amount,
    }), {timestamp: 'Total', amount: 0})    

    return (
        <Layout title="Rolling Reserve">
            <div className='flex pb-4 space-x-4'>
                <Box title='Total Rolling Reserve' value={rollingreserve?.total} src="/images/dashboard/reserve.svg" />
                <Box title='Ready to Harvest' value={rollingreserve?.pending} src="/images/dashboard/harvest.svg" />
                <Box title='Rolling Reserve Paid' value={rollingreserve?.released} src="/images/dashboard/reserve_paid.svg" />
                <Box title='Total Chargeback' value={rollingreserve?.totalChargeback} src="/images/dashboard/chargeback.svg" />
                <Box title='Chargeback Paid' value={rollingreserve?.totalChargebackPaid} src="/images/dashboard/chargeback_paid.svg" />
            </div>
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
                    </div>
                </TableCard>
            </div>
        </Layout>
    )
}

const cols = [
    { text: 'Process Date', value: row => typeof row.timestamp == 'number' ? moment(row.timestamp * 1000).format('MM/DD/YYYY hh:mm:ss'): row.timestamp },
    { text: 'Amount', value: 'amount'},
    { text: 'Tx ID', type: 'id', value: row => <a target='_blank' href={`${row.explorer}/tx/${row.txHash}`} className='text-[#56f]'>{truncateAddress(row.txHash)}</a> },

]
