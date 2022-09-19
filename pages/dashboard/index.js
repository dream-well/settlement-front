import Layout from "components/Layout"
import TableCard from "components/Tables/TableCard"


export default function Settlements() {

    return (
        <Layout title="DashBoard">
            <div className="w-full mt-6">
                <TableCard
                    title='Current Month'
                    cols={cols}
                    rows={rows}
                    className="w-full"
                    combotype={true}
                    />
            </div>
        </Layout>
    )
}
const cols = [
    { text: 'Deposits', value: 'deposits'},
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