import Layout from "components/Layout"

import { BarLoader } from 'react-spinners';
import useSWR from "swr";
import { truncateAddress } from "utils";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function SystemInfo() {

    const { data: info } = useSWR(`/api/systeminfo`, fetcher);

    const infos = [
        { title: 'BSC Address', value: info ? truncateAddress(info.bscAddress) : '' },
        { title: 'Deposit Fee', value: info?.payinFee + '%'},
        { title: 'Deposit range', value: `${info?.minPayin} INR - ${info?.maxPayin} INR` },
        { title: 'Payout Fee', value: info?.payoutFee + '%'},
        { title: 'Payout range', value: `${info?.minPayout} INR - ${info?.maxPayout} INR` },
        { title: 'Rolling Reserve', value: info?.rollingReserve + '%'},
        { title: 'Rolling Reserve Period', value: info?.rollingReservePeriod + ' days'},
        { title: 'Min Settlement Amount', value: info?.minimum_settlement_amount },
        { title: 'Payout Payin Ratio', value: info?.payout_payin_ratio_limit + '%' },
        { title: 'Settlement Payin Ratio', value: info?.settlement_ratio + '%' },
    ]

    return (
        <Layout title="System Info">
            <div className='w-full flex'>
                <div className='w-[480px] bg-white px-[32px] py-[30px] shadow-lg'>
                    <div className='bg-[#F3F4F8] h-[44px] flex justify-between items-center px-[20px]'>
                        <span>#</span>
                        <span>Details</span>
                    </div>
                    {
                        infos.map(({title, value}, key) => (
                            <div className='flex justify-between items-center px-[20px] h-[40px] border-b border-[#F3F4F8]' key={key}>
                                <span>{title}</span>
                                { info != undefined ? 
                                    <span>{value}</span> :
                                    <BarLoader color='#1e2f65' width='100px' />
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

const cols = [
    { text: 'Items', value: 'item', type: 'id' },
    { text: 'Fee (%)', value: 'fee' },
]

const rows = [
    {
        'item': 'Deposits Netbanking',
        'fee': '6%',
    },
    {
        'item': 'Deposits UPI',
        'fee': '5%',
    },
    {
        'item': 'Withdraw Bank Transfer',
        'fee': '2.5%',
    },
    {
        'item': 'withdraw Crypto',
        'fee': '1%',
    },
    {
        'item': 'Rolling Reserve',
        'fee': '5% (for 6 months)',
    },
]