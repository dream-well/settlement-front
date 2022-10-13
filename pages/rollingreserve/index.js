import Button from "components/Buttons/Button"
import Layout from "components/Layout"
import SearchPanel from "components/SearchPanel"
import TableCard from "components/Tables/TableCard"
import Image from "next/image"
import moment from "moment";
import Chip from 'components/Chips/Chip'
import Box from 'components/Boxes/Box'
import { truncateAddress } from "utils"
import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json());


export default function RollingReserve() {
    const { data: rollingreserve } = useSWR(`/api/rollingreserve`, fetcher);
    const { data: rows, error } = useSWR(`/api/harvests`, fetcher);
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
                    title='Harvested details'
                    cols={cols}
                    rows={rows}
                    isLoading={rows ? false : true}
                    className="w-full"
                    />
            </div>
        </Layout>
    )
}

const cols = [
    { text: 'Process Date', value: row => row.createdAt ? moment(row.createdAt * 1000).format('MM/DD/YYYY hh:mm:ss'): "" },
    { text: 'Amount', value: 'amount'},
    { text: 'Tx ID', type: 'id', value: row => <a target='_blank' href={`${row.explorer}/tx/${row.txHash}`} className='text-[#56f]'>{truncateAddress(row.txHash)}</a> },
    // { text: 'Chargeback', value: 'chargeback'},

]
