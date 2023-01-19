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

export default function Settlements() {
    const { activate, account, error, library } = useWeb3React();
    const { data: rows } = useSWR(`api/settlements`, fetcher);

    console.log(account);

    const [dateRange, setDateRange] = useState();
    const [status, setStatus] = useState(null);

    const filteredRows = rows ? rows.filter(row => row['params']['amount'] != "0") : [];

    const cols = [
        { text: 'Settlement ID', value: row => row['params']['settlement_id'] },
        { text: 'Event', value: 'name' },
        { text: 'Private account', value: row => row['params']['account'] },
        { text: 'BSC account', value: row => row['params']['bsc_address'] },
        { text: 'Amount', value: row => Web3.utils.fromWei(row['params']['amount']) },
        { text: 'Process Date', value: row => moment(row.timestamp * 1000).format('MM/DD/YYYY hh:mm:ss')},
        { text: '', value: row => (
            <div>
                <Button onClick={() => make_settlement(row, library, account)}>Settle</Button>
            </div>
        )}
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

async function make_settlement(row, library, account) {
    const web3 = new Web3(library.provider);
    console.log(account);
    const event = row['params'];
    const bsc_admin = new web3.eth.Contract(bsc_admin_abi, bsc_admin_address);
    if(row.name == 'Make_Settlement') {
        if(row.amount == '0') return;
        try{ 
            await _runMethod(bsc_admin.methods.auto_settlement_transfer(event.bsc_address, event.amount, event.settlement_id, row.txHash), {
                from: account
            }, web3);
            console.log('Make_Settlement in BSC', event.bsc_address)
        } catch (e) {
            console.log("error", e.message); 
            if(e.message.startsWith("Internal JSON-RPC error.")) {
                if(e.message.length == 24) return "Internal JSON-RPC error";
                e = JSON.parse(e.message.substr(24));
                toast(e.message);
            }
            if(e.message.startsWith("execution reverted: ")) {
                toast(e.message.substr(20))
            }
        }
    }
    // else if (row.name == 'Make_Settlement_For_Merchant') {
    //     if(row.amount == '0') return;
    //     const { benefeciary_wallet } = await admin.methods.get_merchant(row.returnValues.account).call();
    //     const bsc_benefeciary_wallet = await admin.methods.bsc_addresses(benefeciary_wallet).call();
    //     console.log('Make_Settlement_For_Merchant', row.returnValues.account, bsc_benefeciary_wallet, row.amount, settlement_id, row.transactionHash, account);
    //     try{ 
    //         await _runMethod(bsc_admin.methods.auto_settlement_transfer(bsc_benefeciary_wallet, row.amount, settlement_id, row.transactionHash), {
    //             from: account
    //         }, web3);
    //     } catch (e) {
    //         console.log(e.message);
    //     }
    // }
}