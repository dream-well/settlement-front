import Button from "components/Buttons/Button"
import Layout from "components/Layout"
import TableCard from "components/Tables/TableCard"
import Image from "next/image"
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Fees() {

    const { data: fees } = useSWR(`/api/systeminfo`, fetcher);

    const rows = [
    {
        'item': 'Deposit Fee',
        'fee': fees?.payinFee + '%',
        'limit': `${fees?.minPayin} INR - ${fees?.maxPayin} INR`
    },
    {
        'item': 'Payout Fee',
        'fee': fees?.payoutFee + '%',
        'limit': `${fees?.minPayout} INR - ${fees?.maxPayout} INR`
    },
    {
        'item': 'Rolling Reserve',
        'fee': fees?.rollingReserve  + '%',
    },
    {
        'item': 'Rolling Reserve Period',
        'fee': fees?.rollingReservePeriod + ' days',
    },
]

    return (
        <Layout title=" ">
            <TableCard title='Fee Structure' cols={cols} rows={rows} isLoading={fees ? false : true }/>
        </Layout>
    )
}

const cols = [
    { text: 'Items', value: 'item', type: 'id' },
    { text: 'Fee (%)', value: 'fee' },
    { text: 'Limit', value: 'limit' },
]
