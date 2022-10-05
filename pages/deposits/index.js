import Button from "components/Buttons/Button"
import Layout from "components/Layout"
import SearchPanel from "components/SearchPanel"
import TableCard from "components/Tables/TableCard"
import Image from "next/image"
import moment from "moment";
import Chip from 'components/Chips/Chip'
import useSWR from 'swr';
import { truncateAddress } from "utils"
const fetcher = (url) => fetch(url).then((res) => res.json());


export default function Deposits() {
    
    const { data, error } = useSWR(`/api/deposits`, fetcher);
    const rows = data ?? [];
    return (
        <Layout title="Deposits">
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
    { text: 'Request ID', value: 'requestId', type: 'id' },
    { text: 'Customer ID', value: row => truncateAddress("0x" + row.customerId, 3)},
    { text: 'Total Amount', value: 'amount'},
    { text: 'Fees', value: 'fee_amount'},
    { text: 'Rolling Reserve', value: 'rolling_reserve_amount'},
    { text: 'Amount to Merchant', value: row => row.amount - row.fee_amount - row.rolling_reserve_amount},
    { text: 'Status', value: row => 
        row.status &&
        <div>
            <Chip label={statusList[row.status]} color={colors[statusList[row.status]]} />
        </div>
    },     
    { text: 'Chargeback', value: 'chargeback'},

]

const statusList = [
    "Init", "NotPaid", "Paid", "Expired", "Chargebacked", "Error", "CriticalError"
]

const colors = {
    Paid: "#97cc50",
    NotPaid: "#f1871b",
    Expired: "#ea566b",
    Chargebacked: "#4898ff",
    pending: "#f1871b",
    Error: "#ea566b",
    CriticalError: "#ea566b"
}

const rows = [
    {
        requestId: "1234564",
        customerId: "0001",
        txnRequest: "2022-09-16T12:25:13.870Z",
        txnStatus: "2022-09-16T12:25:13.870Z",
        amount: 10005,
        rollingReserve: 500,
        rollingReserveStatus: 'harvested',
        fees: 5,
        amountToMerchant: 10000,
        status: "success",
    },
    {
        requestId: "1234564",
        customerId: "0002",
        txnRequest: "2022-09-16T12:25:13.870Z",
        txnStatus: "2022-09-16T12:25:13.870Z",
        amount: 10005,
        rollingReserve: 500,
        rollingReserveStatus: 'harvested',
        fees: 5,
        amountToMerchant: 10000,
        status: "initiated",
    },
    {
        requestId: "1234564",
        customerId: "0003",
        txnRequest: "2022-09-16T12:25:13.870Z",
        txnStatus: "2022-09-16T12:25:13.870Z",
        amount: 10005,
        rollingReserve: 500,
        rollingReserveStatus: 'ready_to_harvest',
        fees: 5,
        amountToMerchant: 10000,
        status: "expired",
    },
    {
        requestId: "1234564",
        customerId: "0004",
        txnRequest: "2022-09-16T12:25:13.870Z",
        txnStatus: "2022-09-16T12:25:13.870Z",
        amount: 10005,
        rollingReserve: 500,
        rollingReserveStatus: 'pending',
        fees: 5,
        amountToMerchant: 10000,
        status: "chargebacked",
    },
    {
        requestId: "1234564",
        customerId: "0005",
        txnRequest: "2022-09-16T12:25:13.870Z",
        txnStatus: "2022-09-16T12:25:13.870Z",
        amount: 10005,
        rollingReserve: 500,
        rollingReserveStatus: 'harvested',
        fees: 5,
        amountToMerchant: 10000,
        status: "expired",
    },
    {
        requestId: "1234564",
        customerId: "0006",
        txnRequest: "2022-09-16T12:25:13.870Z",
        txnStatus: "2022-09-16T12:25:13.870Z",
        amount: 10005,
        rollingReserve: 500,
        rollingReserveStatus: 'harvested',
        fees: 5,
        amountToMerchant: 10000,
        status: "success",
    },
    
]