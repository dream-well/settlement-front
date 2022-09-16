import Layout from "components/Layout"
import React, { useState } from 'react';
import TableCard from "components/Tables/TableCard";
import SearchPanel from "components/SearchPanel";

export default function Deposits() {
    const [page, setPage] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [{searchBy, searchText}, setFilter] = useState({});
    const filter = searchBy ? { [searchBy] : searchText } : {};

    const onPrev=() => {
        setPage(Math.max(page-1, 0))
    }

    const onNext = () => {
        const maxPage = Math.ceil((data?.metadata.count ?? 0) / perPage) - 1;
        setPage(Math.min(page+1, maxPage))
    }

    return (
        <Layout title="Withdrawals">
            <SearchPanel />
            <div className="w-full">
                <TableCard
                    title='Transactions'
                    cols={cols}
                    rows={rows}
                    className="w-full"
                    page={page}
                    perPage={perPage}
                    onPrev={onPrev}
                    onNext={onNext}
                    />
            </div>
        </Layout>
    )
}

const cols = [
    { text: 'OrderID', value: 'orderid', type: 'id' },
    { text: 'Customer ID', value: 'customerid'},
    { text: 'Txn Request time', value: 'txnrequest'},
    { text: 'Txn Status time', value: 'txnstatus'},
    { text: 'Amount', value: 'amount'},
    { text: 'Remarks', value: 'remarks'},
    { text: 'Fees', value: 'fees'},
    { text: 'Amt to Settle', value: 'Settle'},
    { text: 'Status', value: 'status'},
    { text: 'AC Details', value: 'details'},

]

const rows = [
    {
        "orderid": "321212",
        "customerid": "24",
        "txnrequest": "26/01/2022 12:20:10",
        "txnstatus": "26/01/2022 12:20:10",
        "amount": "1005",
        "remarks": "great",
        "fees": "5%",
        "Settle": "10000",
        "status": "pending",
        "details": "labourofedward icicci20124 465464564646879846"
    },
    {
        "orderid": "321212",
        "customerid": "24",
        "txnrequest": "26/01/2022 12:20:10",
        "txnstatus": "26/01/2022 12:20:10",
        "amount": "1005",
        "remarks": "great",
        "fees": "5%",
        "Settle": "10000",
        "status": "pending",
        "details": "labourofedward icicci20124 465464564646879846"
    },
    {
        "orderid": "321212",
        "customerid": "24",
        "txnrequest": "26/01/2022 12:20:10",
        "txnstatus": "26/01/2022 12:20:10",
        "amount": "1005",
        "remarks": "great",
        "fees": "5%",
        "Settle": "10000",
        "status": "pending",
        "details": "labourofedward icicci20124 465464564646879846"
    },
    {
        "orderid": "321212",
        "customerid": "24",
        "txnrequest": "26/01/2022 12:20:10",
        "txnstatus": "26/01/2022 12:20:10",
        "amount": "1005",
        "remarks": "great",
        "fees": "5%",
        "Settle": "10000",
        "status": "pending",
        "details": "labourofedward icicci20124 465464564646879846"
    },
    {
        "orderid": "321212",
        "customerid": "24",
        "txnrequest": "26/01/2022 12:20:10",
        "txnstatus": "26/01/2022 12:20:10",
        "amount": "1005",
        "remarks": "great",
        "fees": "5%",
        "Settle": "10000",
        "status": "pending",
        "details": "labourofedward icicci20124 465464564646879846"
    },
    {
        "orderid": "321212",
        "customerid": "24",
        "txnrequest": "26/01/2022 12:20:10",
        "txnstatus": "26/01/2022 12:20:10",
        "amount": "1005",
        "remarks": "great",
        "fees": "5%",
        "Settle": "10000",
        "status": "pending",
        "details": "labourofedward icicci20124 465464564646879846"
    },
]