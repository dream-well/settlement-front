import Button from "components/Buttons/Button"
import Layout from "components/Layout"
import TableCard from "components/Tables/TableCard"
import Image from "next/image"

export default function Chargebacks() {

    return (
        <Layout title=" ">
            <TableCard title='Chargebacks' cols={cols} rows={rows}/>
        </Layout>
    )
}

const cols = [
    { text: 'Dep ID', value: 'depId', type: 'id' },
    { text: 'Dep Date', value: row => row.depDate.toLocaleDateString() },
    { text: 'Phone No', value: 'phoneNo' },
    { text: 'Chargeback Date', value: row => row.chargebackDate.toLocaleDateString() },
    { text: 'Amount', value: 'amount' },
    { text: 'Info', value: 'info' },
]

const rows = [
    {
        'depId': '00001',
        'depDate': new Date(),
        'phoneNo': '987654321',
        'chargebackDate': new Date(),
        'amount': parseInt(Math.random() * 10000),
        'info': 'info text here'
    },
    {
        'depId': '00002',
        'depDate': new Date(),
        'phoneNo': '12312453234',
        'chargebackDate': new Date(),
        'amount': parseInt(Math.random() * 10000),
        'info': 'info text here'
    },
    {
        'depId': '00003',
        'depDate': new Date(),
        'phoneNo': '98711234566',
        'chargebackDate': new Date(),
        'amount': parseInt(Math.random() * 10000),
        'info': 'info text here'
    },
]