import Layout from "components/Layout"
import TableCard from "components/Tables/TableCard"
import moment from "moment";
import useSWR from 'swr';
import { truncateAddress } from "utils";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Chargebacks() {
    const { data: info } = useSWR(`/api/systemstatus`, fetcher);
    const { data: rows, error } = useSWR(`/api/transactions`, fetcher);

    const cols = [
        { text: 'DateTime', value: row => row.timestamp ? moment(row.timestamp * 1000).format('MM/DD/YYYY hh:mm:ss'): "" },
        { text: 'Function', value: 'func'},
        { text: 'Tx ID', type: 'id', value: row => <a target='_blank' href={`${info.explorer}/tx/${row.txHash}`} className='text-[#56f]'>{truncateAddress(row.txHash, 6, 10, 10, '. ')}</a> },
        // { text: 'Arguments', value: row => <div className=''>{JSON.stringify(row.args)}</div> },
    ]

    return (
        <Layout title=" ">
            <TableCard title='Transactions' cols={cols} rows={rows} isLoading={rows ? false : true}/>
        </Layout>
    )
}

