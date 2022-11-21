import Layout from "components/Layout"
import useSWR from "swr";
import Box from 'components/Boxes/Box'
import { useState } from "react";
import moment from "moment";
import { SelectPicker } from 'rsuite'
import { useEffect } from "react-virtualized/node_modules/@types/react";

const fetcher = ({url, args}) => fetch(url + '?' + new URLSearchParams(args)).then((res) => res.json());

export default function Settlements() {
    
    let from, to;
    let date = moment((new Date).toDateString());

    const [value, setValue] = useState(0);
    const list = ['AllTime', 'Today', 'Yesterday', 'This Month', 
        moment(date).subtract(1, 'month').format('MMM YYYY'),
        moment(date).subtract(2, 'month').format('MMM YYYY'),
    ];


    switch(value) {
        case 0: break;
        case 1: 
            from = date;
            break;
        case 2:
            to = moment(date);
            from = date.subtract(1, 'day');
            break;
        case 3:
            from = date.set('date', 1);
            break;
        case 4:
            to = date.set('date', 1);
            from = moment(to).subtract(1, 'month');
            break;
        case 5:
            to = date.set('date', 1).subtract(1, 'month');
            from = moment(to).subtract(1, 'month');
            break;
    }
    const args = {};
    if(from) args.from = from.unix();
    if(to) args.to = to.unix();

    const { data, error, mutate } = useSWR({ url: `/api/dashboard`, args }, fetcher);

    useEffect(() => {
        const timerId = setInterval(() => {
            mutate();
        }, 5000);
        return () => {
            clearInterval(timerId);
        }
    })

    return (
        <Layout title="DashBoard">
            <div className='p-[30px] bg-white rounded-[4px]'>
                <div className='mb-4'>
                    <SelectPicker data={list.map((each, i) => ({label: each, value: i}))} 
                        searchable={false} style={{ width: 140 }}  
                        value={value}
                        defaultValue={0}
                        cleanable={false}
                        onChange={setValue}
                    />
                </div>  
                <div className='flex justify-between space-x-2'>
                    <Box title='Deposits' value={data?.deposits} src="/images/dashboard/deposit.svg" />
                    <Box title='Payouts' value={data?.cashouts} src="/images/dashboard/payout.svg" />
                    <Box title='Settlement Pending' value={data?.settlements.pending} src="/images/dashboard/settlement_pending.svg" />
                    <Box title='Settlement Paid' value={data?.settlements.settled} src="/images/dashboard/settlement_paid.svg" />
                </div>
            </div>
            <div className='p-[30px] bg-white rounded-[4px] flex justify-between space-x-2 mt-[30px]'>
                <Box title='Total Rolling Reserve' value={data?.rollingReserve.total} src="/images/dashboard/reserve.svg" />
                <Box title='Rolling Reserve Paid' value={data?.rollingReserve.released} src="/images/dashboard/reserve_paid.svg" />
                <Box title='Total Chargeback' value={data?.totalChargeback} src="/images/dashboard/chargeback.svg" />
                <Box title='Chargeback Paid' value={data?.totalChargebackPaid} src="/images/dashboard/chargeback_paid.svg" />
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