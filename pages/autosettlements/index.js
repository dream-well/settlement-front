import { TextField } from "@mui/material"
import Button from "components/Buttons/Button"
import Layout from "components/Layout"
import TableCard from "components/Tables/TableCard"

export default function AutoSettlements() {

    return (
        <Layout title="Auto Settlements">
            <div className="flex flex-col">
                <div className="flex flex-col bg-white rounded-xl p-6 mb-6">
                    <div>
                        <span className="text-[22px] font-medium">Set Settlement Limit</span>
                    </div>
                    <div className="flex my-6">
                        <TextField id="outlined-basic" variant="outlined" size="small"/>
                        <Button type="fill" className="ml-4">Submit</Button>
                    </div>
                    <div className="text-[#FFCC92] text-[13px] font-medium">
                        Min:5000 DR
                    </div>
                </div>
                <TableCard title='Hsitory' cols={cols} rows={rows}/>
            </div>
        </Layout>
    )
}

const cols = [
    { text: 'Date', value: 'date', type: 'id' },
    { text: 'Txn.ID', value: 'txnid'},
    { text: 'Amount (DR)', value: 'amount'},
]

const rows = [
    {
        "date": "14-09-2022 11:34:25",
        "txnid": "001",
        "amount": "1000.00",
    },
    {
        "date": "14-09-2022 11:34:25",
        "txnid": "002",
        "amount": "1000.00",
    },
    {
        "date": "14-09-2022 11:34:25",
        "txnid": "003",
        "amount": "1000.00",
    },
]