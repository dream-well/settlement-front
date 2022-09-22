import { Button, Icon, IconButton, MenuItem, Select, TextField } from "@mui/material"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Layout from "components/Layout"
import { useState } from "react";
import Web3 from 'web3';
import { useWeb3React } from "@web3-react/core";

const web3 = new Web3;

const infos = [
    { type: 'uint256', description:'merchant ID', value: '0' },
    { type: 'uint256', description:'nonce', value: '0' },
    { type: 'hash', value: 'customer@jax.net' },
]

export default function Signature() {

    const { activate, account, error, library } = useWeb3React();
    const [data, setData] = useState(infos);
    const [signature, setSignature] = useState('signature here');

    const onTypeChange = (i, type) => {
        if(type == 'delete') 
            data.splice(i, 1);
        else
            data[i].type = type;
        setData([...data]);
    }
    
    const onValueChange = (i, value) => {
        data[i].value = value;
        setData([...data]);
    }

    const addRow = () => {
        setData([...data, {type: 'hash', value: ''}])
    }

    const copy2Clipboard = () => {

    }

    const generateSignature = async () => {
        const web3 = new Web3(library.provider);
        const paramHash = web3.utils.soliditySha3(
            ...data.slice(2).map(({type, value}) => ({
                t: type == 'hash' ? 'bytes32' : type,
                v: type == 'hash' ? web3.utils.keccak256(value) : value
            }))
          ).toString('hex');
        const hash = web3.utils.soliditySha3(
            {t: 'uint256', v: data[0].value},
            {t: 'bytes32', v: paramHash},
            {t: 'uint256', v: data[1].value},
          ).toString('hex');
        const signature = await web3.eth.sign(web3.eth.accounts.hashMessage(hash), account);
        setSignature(signature);
    }

    return (
        <Layout title="Generate a signature">
            <div className='w-full flex items-top justify-evenly'>
                <div className='pt-8 w-[480px] rounded-[12px] bg-white px-[32px] mt-[40px] pb-[12px] shadow-lg'>
                    {
                        data.map(({type, description, value}, key) => (
                            <div className='flex justify-between mb-[24px] items-center' key={key}>
                                <Select
                                    value={type}
                                    onChange={e => onTypeChange(key, e.target.value)}
                                    className='mr-4'
                                >
                                    <MenuItem value={'uint256'}>uint256</MenuItem>
                                    <MenuItem value={'hash'}>hash</MenuItem>
                                    <MenuItem value={'bytes32'}>bytes32</MenuItem>
                                    {
                                        key > 1 &&
                                        <MenuItem value={'delete'}>delete</MenuItem>
                                    }
                                </Select>
                                <TextField fullWidth label={description} defaultValue={value} variant="standard"
                                    value={value}
                                    onChange={e => onValueChange(key, e.target.value)}
                                />
                            </div>
                        ))
                    }
                    <IconButton size='large' color='primary' onClick={addRow} ><AddCircleIcon /></IconButton>
                    <Button color='primary' variant='outlined' onClick={generateSignature}>Generate</Button>
                </div>
                <div className='pt-8 w-[480px] rounded-[12px] bg-white px-[32px] mt-[40px] pb-[12px] shadow-lg break-all	cursor-pointer'
                    onClick={copy2Clipboard}
                >
                    {
                        data.slice(2).map(({type, value}) => (
                            <div>{type == 'hash' ? 'bytes32' : type}: {type == 'hash' ? web3.utils.keccak256(value) : value}</div>
                        ))
                    }

                    <div className='mt-8'>
                        {signature}
                    </div>


                </div>
            </div>
        </Layout>
    )
}