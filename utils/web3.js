import Web3 from 'web3';
import { ethers } from 'ethers';
import util from 'util';
import bsc_admin_abi from 'data/bsc_admin';

const timer = util.promisify(setTimeout);
const web3 = new Web3(process.env.bsc_rpc);
export const web3_bsc = new Web3(process.env.bsc_rpc);

console.log('bsc_admin', process.env.bsc_admin);

export const bsc_admin = new web3.eth.Contract(bsc_admin_abi, process.env.bsc_admin);
export const bsc_admin_address = "0x51D6474353f763E0adba12C63dd88627C75391B5";
export default web3;

export function batchCall(web3, calls) {
    let batch = new web3.BatchRequest();
    let promises = calls.map(call => {
        return new Promise((resolve, reject) => {
            if(call.func) {
                batch.add(call.func.request(...call.params, (error, data) => {
                    error ? reject(error) : resolve(data)
                }));
                return;
            }
            let request = call.request({}, (error, data) => 
                error ? reject(error) : resolve(data)
            );
            batch.add(request);
        });
    });

    batch.execute();

    return Promise.all(promises);
}

export const toNumber = (bn, decimals = 18) => Number(ethers.utils.formatUnits(bn, decimals));

export async function recoverSigner(merchantId, values, signature) {
    const paramHash = web3.utils.soliditySha3(...values);
    const hash = web3.utils.soliditySha3({t: 'uint256', v: merchantId}, paramHash);
    const sender = await web3.eth.accounts.recover(hash, signature);
    return sender;
}

export async function recoverRequestSigner(params, signature) {
    const values = Object.values(params);
    const hash = web3.utils.soliditySha3(...values);
    console.log('x-signature-data', "algorithmic-" + hash);
    const sender = await web3.eth.accounts.recover("algorithmic-" + hash, signature);
    return sender;
}

export async function estimateGas(method, options) {
    try {
        const gasAmount = await method.estimateGas(options);
        return gasAmount;
    } catch(e) {
        let error = e;
        if(e.message.startsWith("Internal JSON-RPC error.")) {
            error = JSON.parse(e.message.substr(24));
        }
        throw new Error(error.message);
    }
}

let accountLocked = {}

async function waitForUnlockAccount(sender) {
    while(accountLocked[sender]) {
        await timer(10);
        // console.log('waiting...');
    }
}

function lockAccount(sender) {
    accountLocked[sender] = true;
}

function unlockAccount(sender) {
    accountLocked[sender] = false;
}

export async function _runMethod(method, options, web3) {
    const sender = options.from.toLowerCase();
    await waitForUnlockAccount(sender);
    lockAccount(sender);
    try {
        const gas = await estimateGas(method, options);
        const allTxCount = await web3.eth.getTransactionCount(sender, "pending");
        let nonce = allTxCount;
        console.log({nonce: allTxCount});
   
        const tx = method.send({ ...options, gas, nonce });
       
        tx.on('transactionHash', (txHash) => {
            console.log(txHash);
            // unlockAccount(sender);
        })
        // .on('error', (event) => {
        //     unlockAccount(sender);
        // })
        unlockAccount(sender);
        // tx.on('rec')
        // console.log(tx);
        return tx;
    } catch(e) {
        unlockAccount(sender);
        throw e;
    }
}


export async function runMethod(method, options) {
    return _runMethod(method, options, web3);
}

export async function runMethodBsc(method, options) {
    return _runMethod(method, options, web3_bsc);
}

export async function runMethodSub(method, options) {
    return _runMethod(method, options, web3_sub);
}

export function get_hash(...params) {
    return web3.utils.soliditySha3(...params);
}