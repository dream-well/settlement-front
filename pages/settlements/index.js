import Button from "components/Buttons/Button"
import Chip from "components/Chips/Chip"
import Layout from "components/Layout"
import SearchPanel from "components/SearchPanel"
import TableCard from "components/Tables/TableCard"
import moment from "moment"


export default function Settlements() {

    return (
        <Layout title="Settlements">
            <SearchPanel />
            <div className="w-full">
                <TableCard
                    title='Transactions'
                    cols={cols}
                    rows={rows}
                    className="w-full"
                    />
            </div>
        </Layout>
    )
}
const cols = [
    { text: 'OrderID', value: 'orderId', type: 'id' },
    { text: 'Txn Request time', value: row => 
        <p>
            {moment(row.txnRequest).format("DD/MM/YYYY")} {moment(row.txnRequest).format("HH:mm:ss")}
        </p>
    },
    { text: 'Txn Status time', value: row => 
        <p>
            {moment(row.txnStatus).format("DD/MM/YYYY")} {moment(row.txnStatus).format("HH:mm:ss")}
        </p>
    },
    { text: 'Amount', value: row => row.amount.toLocaleString()},
    { text: 'Info', value: "info" },
    { text: 'Status', value: row => 
        <div>
            <Chip label={row.status} color={colors[row.status]} />
        </div>
    },     

]
const colors = {
    success: "#97cc50",
    initiated: "#f1871b",
    expired: "#ea566b",
    chargebacked: "#4898ff",
    pending: "#f1871b",
    error: "#ea566b",
    harvested: "#97cc50",
    ready_to_harvest: "#4898ff",
    pending: "#f1871b",
}

const rows = [
    {
        orderId: "1234564",
        txnRequest: "2022-09-16T12:25:13.870Z",
        txnStatus: "2022-09-16T12:25:13.870Z",
        amount: 10005,
        info: "info type",
        status: "success",
    },
    {
        orderId: "1234564",
        txnRequest: "2022-09-16T12:25:13.870Z",
        txnStatus: "2022-09-16T12:25:13.870Z",
        amount: 10005,
        info: "info type",
        status: "initiated",
    },
    {
        orderId: "1234564",
        txnRequest: "2022-09-16T12:25:13.870Z",
        txnStatus: "2022-09-16T12:25:13.870Z",
        amount: 10005,
        info: "info type",
        status: "expired",
    },
    {
        orderId: "1234564",
        txnRequest: "2022-09-16T12:25:13.870Z",
        txnStatus: "2022-09-16T12:25:13.870Z",
        amount: 10005,
        info: "info type",
        status: "chargebacked",
    },
    {
        orderId: "1234564",
        txnRequest: "2022-09-16T12:25:13.870Z",
        txnStatus: "2022-09-16T12:25:13.870Z",
        amount: 10005,
        info: "info type",
        status: "expired",
    },
    {
        orderId: "1234564",
        txnRequest: "2022-09-16T12:25:13.870Z",
        txnStatus: "2022-09-16T12:25:13.870Z",
        amount: 10005,
        info: "info type",
        status: "success",
    },
    
]