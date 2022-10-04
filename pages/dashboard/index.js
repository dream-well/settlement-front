import Layout from "components/Layout"
import Table from "components/Tables/Table"
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function Settlements() {

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
                        cols={cols}
                        rows={rows}
                        />
                </div>
            </div>
        </Layout>
    )
}
const cols = [
    { text: 'Deposits', value: 'deposits', type:'id'},
    { text: 'Cashouts', value: 'cashouts'},
    { text: 'Settlements', value: row => 
        <div>
            <span className="text-[#3a7bfd] font-bold">Pending: </span>
            <span className="text-[#3a7bfd]">{row.settlements_pending}</span>,&nbsp;
            <span className="text-[#ffc107] font-bold">Settled: </span>
            <span className="text-[#ffc107]">{row.settlements_settled}</span>
        </div>
    },
    { text: 'Rolling Reserve', value: row => 
        <div>
            <span className="text-[#3a7bfd] font-bold">Total: </span>
            <span className="text-[#3a7bfd]">{row.rollingreserve_total}</span>,&nbsp;
            <span className="text-[#ffc107] font-bold">Released: </span>
            <span className="text-[#ffc107]">{row.rollingreserve_released}</span>
        </div>
    },
    { text: 'Chargeback', value: "chargeback"},

]
const rows = [
    {
        deposits: "5,00,000 (25)",
        cashouts: "5,00,000 (25)",
        settlements_pending: 300000,
        settlements_settled: 200000,
        rollingreserve_total: 300000,
        rollingreserve_released: 200000,
        chargeback: "5,00,000 (25)",
    },
]