import Layout from "components/Layout"

export default function Fees() {

    const infos = [
        { title: 'Maintenance Mode', value: 'off' },
        { title: 'Concurrent Info', value: '5%' },
        { title: 'Merchant Status', value: 'off' },
        { title: 'Deposit range', value: '0-100' },
        { title: 'Min. Settlement Amount', value: '1000' },
        { title: 'Payout limit', value: '1000' },
        { title: 'Payout fees', value: '1000' },
        { title: 'Rolling reserve', value: '1000' },
    ]

    return (
        <Layout title=" ">
            <div className='w-full flex items-center justify-center'>
                <div className='w-[480px] rounded-[12px] bg-white px-[32px] mt-[40px] pt-[12px] pb-[12px] shadow-lg'>
                    <h3 className='py-4 text-[25px] font-bold text-[#1e2f65] pb-[24px]'>System Info</h3>
                    {
                        infos.map(({title, value}, key) => (
                            <div className='flex justify-between mb-[24px]' key={key}>
                                <h1>{title}</h1>
                                <span>{value}</span>
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