import Layout from "components/Layout"
import Table from "components/Tables/Table"
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import useSWR from "swr";
import { useEffect } from "react";
import Box from 'components/Boxes/Box'
import { BarLoader } from "react-spinners";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Settlements() {
    const { data, error } = useSWR(`/api/dashboard`, fetcher);
    return (
        <Layout title="DashBoard">
            <div className='flex pb-4 flex-wrap'>
                <Box className='mr-4 mb-6' title='Deposits' value={data?.deposits} />
                <Box className='mr-10 mb-6' title='Payouts' value={data?.cashouts} />
                <Box className='mr-4 mb-6' title='Settlement Pending' value={data?.settlements.pending} />
                <Box className='mr-4 mb-6' title='Settlement Paid' value={data?.settlements.settled} />
                <div className='w-full'></div>
                <Box className='mr-4 mb-6' title='Total Rolling Reserve' value={data?.rollingReserve.total} />
                <Box className='mr-10 mb-6' title='Rolling Reserve Paid' value={data?.rollingReserve.released} />
                <Box className='mr-4 mb-6' title='Total Chargeback' value={data?.totalChargeback} />
                <Box className='mr-4 mb-6' title='Chargeback Paid' value={data?.totalChargebackPaid} />
            </div>
        </Layout>
    )
}
const cols = [
    { text: 'Deposits', value: 'deposits', type:'id'},
    { text: 'Payouts', value: 'cashouts'},
    { text: 'Settlements', value: 'settlements_settled'},
    { text: 'Rolling Reserve', value: row => 
        <div>
            <span className="text-[#3a7bfd] font-bold">Total: </span>
            <span className="text-[#3a7bfd]">{row.rollingreserve_total}</span>,&nbsp;&nbsp;
            <span className="text-[#ffc107] font-bold">Released: </span>
            <span className="text-[#ffc107]">{row.rollingreserve_released}</span>
        </div>
    },
    { text: 'Chargeback', value: "chargeback"},

]