import { useState, useEffect } from 'react'
import Layout from "components/Layout"
import TableCard from "components/Tables/TableCard"
import moment from "moment";
import Chip from 'components/Chips/Chip'
import useSWR from 'swr';
import { DateRangePicker, SelectPicker } from 'rsuite'
import { filterDateRange, truncateAddress } from "utils"
import { fetcher } from "utils";
import Web3 from 'web3';
import { useWeb3React } from "@web3-react/core";
import Button from 'components/Buttons/Button';
import { _runMethod, bsc_admin_address } from 'utils/web3';
import bsc_admin_abi from 'data/bsc_admin';
import { toast } from 'react-toastify';

export default function Exchange() {
    const { activate, account, error, library } = useWeb3React();
    const { data: rows } = useSWR(`api/exchanges`, fetcher);

    console.log(account);

    const [dateRange, setDateRange] = useState();
    const [status, setStatus] = useState(null);

    const filteredRows = rows ? rows.filter(row => row['params']['amount'] != "0") : [];
/* 
        request.amountIn = amountIn;
        request.amountJaxre = jaxreAmount;
        request.account = destination_address;
        request.request_timestamp = block.timestamp;
        request.status = RequestStatus.Requested;
*/
    const cols = [
        { text: 'Request ID', value: row => row['params']['requestId'] },
        { text: 'Event', value: 'name' },
        { text: 'Destination', value: row => truncateAddress(row['params']['request']['account']) },
        { text: 'AmountIn', value: row => Web3.utils.fromWei(row['params']['request']['amountIn']) },
        { text: 'AmountOut', value: row => Web3.utils.fromWei(row['params']['request']['amountOut']) },
        { text: 'Request Date', value: row => moment(row.timestamp * 1000).format('MM/DD/YYYY hh:mm:ss')},
        { text: 'Status', value: row => 
            row.status &&
            <div>
                <Chip label={row.status} color={colors[row.status]} />
            </div>
        },   
        { text: '', value: row => (
            <div>
                <Button disabled={row.status == 'Processed'} className={row.status == 'Processed' && '!bg-gray-400 !border-gray-400'} onClick={() => process_request(row, library, account)}>Settle</Button>
            </div>
        )},
        
    ]

    return (
        <Layout title="Settlements  ">
            <div className="w-full">
                <TableCard
                    title='Transactions'
                    cols={cols}
                    rows={filteredRows}
                    isLoading={false}
                    // isLoading={filteredRows ? false : true}
                    className="w-full"
                >
                    <div className='flex items-center'>
                        <span className='mr-2'>Filter By Date:</span>
                        <DateRangePicker value={dateRange} onChange={setDateRange}/>
                        <span className='ml-4 mr-2'>Filter By Status:</span>
                        {/* <SelectPicker data={statusList.map((each, i) => ({label: each, value: i}))} searchable={false} style={{ width: 140 }}  
                            value={status}
                            onChange={setStatus}
                        /> */}
                    </div>
                </TableCard>
            </div>
        </Layout>
    )
}

async function process_request(requestId, amountIn, amountOut) {
    const web3 = new Web3(library.provider);
    console.log(account);
    const event = row['params'];
    const bsc_admin = new web3.eth.Contract(bsc_admin_abi, bsc_admin_address);
    if(event.amount == '0') return;
    try{ 
        if(row.name == 'Make_Settlement') {
            await _runMethod(bsc_admin.methods.auto_settlement_transfer(event.bsc_address, event.amount, event.settlement_id, row.txHash), {
                from: account
            }, web3);
            console.log('Make_Settlement in BSC', event.bsc_address)
        }
        else if (row.name == 'Make_Settlement_For_Merchant') {
            await _runMethod(bsc_admin.methods.auto_settlement_transfer(event.bsc_benefeciary_wallet, event.amount, event.settlement_id, row.txHash), {
                from: account
            }, web3);
        }
    } catch (e) {
        console.log("error", e.message); 
        let message = e.message;
        if(e.message.startsWith("Internal JSON-RPC error.")) {
            if(e.message.length == 24) return "Internal JSON-RPC error";
            e = JSON.parse(e.message.substr(24));
            message = e.message;
        }
        if(e.message.startsWith("execution reverted: ")) {
            message = e.message.substr(20);
        }
        toast.error(message);
    }
}

const statusList = [
    "Init", "Processed"
]

const colors = {
    Processed: "#97cc50",
    Init: "#f1871b",
    Expired: "#ea566b",
    Chargebacked: "#4898ff",
    "Refunded / Rejected": "#ea566b",
    CriticalError: "#ea566b"
}
