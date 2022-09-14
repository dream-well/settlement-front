import Button from "components/Buttons/Button"
import Layout from "components/Layout"
import TableCard from "components/Tables/TableCard"
import Image from "next/image"

export default function Fees() {

    return (
        <Layout title=" ">
            <TableCard title='Fee Structure' cols={cols} rows={rows}/>
        </Layout>
    )
}

const cols = [
    { text: 'Items', value: 'item', type: 'id' },
    { text: 'Fee (%)', value: 'fee' },
]

const rows = [
    {
        'item': 'Deposits Netbanking',
        'fee': '6%',
    },
    {
        'item': 'Deposits UPI',
        'fee': '5%',
    },
    {
        'item': 'Withdraw Bank Transfer',
        'fee': '2.5%',
    },
    {
        'item': 'withdraw Crypto',
        'fee': '1%',
    },
    {
        'item': 'Rolling Reserve',
        'fee': '5% (for 6 months)',
    },
]