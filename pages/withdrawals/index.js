import Button from "components/Buttons/Button"
import Layout from "components/Layout"
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Autocomplete } from "@mui/material";
import TableCard from "components/Tables/TableCard";

export default function Deposits() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
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
            <div className='flex flex-col px-8 py-6 bg-white rounded-[8px]'>
                <div className='font-medium text-[20px] py-[16px] flex-grow'>
                    Search
                </div>
                <div className="flex justify-between">
                    <div className="w-[320px]">From date</div>
                    <div className="w-[320px]">To date</div>
                    <div className="w-[320px]">Status</div>
                </div>
                <div className="flex justify-between mt-3">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker className="w-[320px]" label="Start Date" value={startDate} onChange={(newDate) => { setStartDate(newDate); }} renderInput={(params) => <TextField {...params} />}/>
                        <DatePicker className="w-[320px]" label="End Date" value={endDate} onChange={(newDate) => { setEndDate(newDate); }} renderInput={(params) => <TextField {...params} />}/>
                    </LocalizationProvider>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={status_options}
                        sx={{ width: 320 }}
                        renderInput={(params) => <TextField {...params} label="Status" />}
                        placeholder="Choose..."
                    />
                </div>
                <div className="flex justify-between mt-5">
                    <div className="w-[320px]">Search By</div>
                    <div className="w-[320px]">Search by Email</div>
                    <div className="w-[320px]"> </div>
                </div>
                <div className="flex justify-between mt-3">
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={searchby_options}
                        sx={{ width: 320 }}
                        renderInput={(params) => <TextField {...params} label="SearchBy" />}
                        placeholder="Choose..."
                    />
                    <TextField id="outlined-basic" className="w-[320px]" variant="outlined" />
                        <Button bgColor="#6362e7" className="w-[320px] h-[50px]">Search</Button>
                </div>
            </div>
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

const status_options = [
    { label: 'success', year: 1994 },
    { label: 'Failed', year: 1972 },
    { label: 'Pending', year: 1973 },
];

const searchby_options = [
    { label: 'Email ID', year: 1993 },
    { label: 'Order ID', year: 19723 },
];

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