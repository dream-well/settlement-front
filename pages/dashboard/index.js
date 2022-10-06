import Layout from "components/Layout"
import Table from "components/Tables/Table"
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import useSWR from "swr";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Settlements() {
    const { data, error } = useSWR(`/api/dashboard`, fetcher);
    const custom_cols = cols.map(col =>({...col, 
        value: data ? col.value : () => (<div className='py-[10px]'><BarLoader color='#1e2f65' width='100px'/></div>)
    }))
    let row =  {
            deposits: data?.deposits,
            cashouts: data?.cashouts,
            settlements_pending: data?.settlements.pending,
            settlements_settled: data?.settlements.settled,
            rollingreserve_total: data?.rollingReserve.total,
            rollingreserve_released: data?.rollingReserve.released,
            chargeback: data?.chargeback,
        };
    return (
        <Layout title="DashBoard">
            <div className="w-full">
                <div className='bg-white rounded-[12px] shadow pb-[10px] px-6 pt-6 pb-10'>
                    <FormControl>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={2}
                            size="small"
                            onChange={(e) => setmonth(e.target.value)}
                        >
                        <MenuItem value={1}>Current Month</MenuItem>
                        <MenuItem value={2}>Today</MenuItem>
                        <MenuItem value={3}>Yesterday</MenuItem>
                        <MenuItem value={4}>August 2022</MenuItem>
                        <MenuItem value={5}>July 2022</MenuItem>
                        <MenuItem value={6}>June 2022</MenuItem>
                        </Select>
                    </FormControl>
                    <Table
                        className='mt-6'
                        title='Current Month'
                        cols={custom_cols}
                        rows={[row]}
                        />
                </div>
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