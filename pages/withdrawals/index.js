import Layout from "components/Layout"
import React, { useState } from 'react';
import TableCard from "components/Tables/TableCard";
import SearchPanel from "components/SearchPanel";
import moment from "moment";
import Chip from 'components/Chips/Chip'


export default function Deposits() {
    return (
        <Layout title="Withdrawals">
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
    { text: 'Customer ID', value: 'customerId'},
    { text: 'Txn Request time', value: row => 
        <div className='flex flex-col justify-center'>
            <p>{moment(row.txnRequest).format("YYYY/MM/DD")}</p>
            <p className='text-sm'>{moment(row.txnRequest).format("HH:mm:ss")}</p>
        </div>
    },
    { text: 'Txn Status time', value: row => 
        <div className='flex flex-col justify-center'>
            <p>{moment(row.txnStatus).format("YYYY/MM/DD")}</p>
            <p className='text-sm'>{moment(row.txnStatus).format("HH:mm:ss")}</p>
        </div>
    },
    { text: 'Amount', value: row => row.amount.toLocaleString()},
    { text: 'Remarks', value: 'remarks' },
    { text: 'Fees', value: row => row.fees + ' %'},
    { text: 'Amt to Settle', value: row => row.amountToSettle.toLocaleString()},
    { text: 'Status', value: row => 
        <div>
            <Chip label={row.status} color={colors[row.status]} className='capitalize'/>
        </div>
    },     
    { text: 'AC Details', value: 'acDetails' },
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
        customerId: "0001",
        txnRequest: "2022-09-16T12:25:13.870Z",
        txnStatus: "2022-09-16T12:25:13.870Z",
        amount: 10005,
        remarks: "remarks",
        fees: 5,
        amountToSettle: 10000,
        status: "success",
        acDetails: "Selvanthegod icicci20124 465464564646879846",
    },
    {
        orderId: "1234564",
        customerId: "0002",
        txnRequest: "2022-09-16T12:25:13.870Z",
        txnStatus: "2022-09-16T12:25:13.870Z",
        amount: 10005,
        remarks: "remarks",
        fees: 5,
        amountToSettle: 10000,
        status: "pending",
        acDetails: "Selvanthegod icicci20124 465464564646879846",
    },
    {
        orderId: "1234564",
        customerId: "0003",
        txnRequest: "2022-09-16T12:25:13.870Z",
        txnStatus: "2022-09-16T12:25:13.870Z",
        amount: 10005,
        remarks: "remarks",
        fees: 5,
        amountToSettle: 10000,
        status: "expired",
        acDetails: "Selvanthegod icicci20124 465464564646879846",
    },
    {
        orderId: "1234564",
        customerId: "0004",
        txnRequest: "2022-09-16T12:25:13.870Z",
        txnStatus: "2022-09-16T12:25:13.870Z",
        amount: 10005,
        remarks: "remarks",
        fees: 5,
        amountToSettle: 10000,
        status: "error",
        acDetails: "Selvanthegod icicci20124 465464564646879846",
    },
    {
        orderId: "1234564",
        customerId: "0005",
        txnRequest: "2022-09-16T12:25:13.870Z",
        txnStatus: "2022-09-16T12:25:13.870Z",
        amount: 10005,
        remarks: "remarks",
        fees: 5,
        amountToSettle: 10000,
        status: "pending",
        acDetails: "Selvanthegod icicci20124 465464564646879846",
    },
    {
        orderId: "1234564",
        customerId: "0006",
        txnRequest: "2022-09-16T12:25:13.870Z",
        txnStatus: "2022-09-16T12:25:13.870Z",
        amount: 10005,
        remarks: "remarks",
        fees: 5,
        amountToSettle: 10000,
        status: "pending",
        acDetails: "Selvanthegod icicci20124 465464564646879846",
    },
    
]