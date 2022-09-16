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
    { text: 'Limit', value: 'limit' },
]

const rows = [
    {
        'item': 'Deposits Netbanking',
        'fee': '6%',
        'limit': '100 INR - 100000 INR'
    },
    {
        'item': 'Deposits UPI',
        'fee': '5%',
        'limit': '100 INR - 100000 INR'
    },
    {
        'item': 'Withdraw Bank Transfer',
        'fee': '2.5%',
    },
    {
        'item': 'Settlement',
        'fee': 'Market Price',
        'limit': 'Min 100000 INR'
    },
]