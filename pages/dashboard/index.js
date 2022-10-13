import Layout from "components/Layout"
import useSWR from "swr";
import Box from 'components/Boxes/Box'
import { useState } from "react";
import moment from "moment";
import { SelectPicker } from 'rsuite'

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

    const { data, error } = useSWR({ url: `/api/dashboard`, args }, fetcher);

    return (
        <Layout title="DashBoard">
            <div className='mb-4'>
                <SelectPicker data={list.map((each, i) => ({label: each, value: i}))} 
                    searchable={false} style={{ width: 140 }}  
                    value={value}
                    defaultValue={0}
                    cleanable={false}
                    onChange={setValue}
                />
            </div>  
            <div className='flex pb-4 flex-wrap justify-between'>
                <Box className='mr-4 mb-6' title='Deposits' value={data?.deposits} src="/images/dashboard/deposit.svg" />
                <Box className='mr-4 mb-6' title='Payouts' value={data?.cashouts} src="/images/dashboard/payout.svg" />
                <Box className='mr-4 mb-6' title='Settlement Pending' value={data?.settlements.pending} src="/images/dashboard/settlement_pending.svg" />
                <Box className='mr-4 mb-6' title='Settlement Paid' value={data?.settlements.settled} src="/images/dashboard/settlement_paid.svg" />
                <Box className='mr-4 mb-6' title='Total Rolling Reserve' value={data?.rollingReserve.total} src="/images/dashboard/reserve.svg" />
                <Box className='mr-4 mb-6' title='Rolling Reserve Paid' value={data?.rollingReserve.released} src="/images/dashboard/reserve_paid.svg" />
                <Box className='mr-4 mb-6' title='Total Chargeback' value={data?.totalChargeback} src="/images/dashboard/chargeback.svg" />
                <Box className='mr-4 mb-6' title='Chargeback Paid' value={data?.totalChargebackPaid} src="/images/dashboard/chargeback_paid.svg" />
                <div className='min-w-[200px] mr-4'></div>
                <div className='min-w-[200px] mr-4'></div>
                <div className='min-w-[200px] mr-4'></div>
                <div className='min-w-[200px] mr-4'></div>
                <div className='min-w-[200px] mr-4'></div>
                <div className='min-w-[200px] mr-4'></div>  
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