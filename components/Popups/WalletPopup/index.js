import Image from "next/image"
import Popup from "../Popup"
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from "@web3-react/injected-connector";
import { MetaMask } from "@web3-react/metamask";
import cn from 'classnames'
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { selectpopupSate, setpopupSate } from "store/slices/popupSlice"

const metamask = new InjectedConnector({
    supportedChainIds: [316]
  });

export default function WalletPopup({ className, hidden, onClose }) {
    const { library, account, activate, setError } = useWeb3React();
    
    const [isConnecting, setConnecting] = useState(-1);
    const dispatch = useDispatch();
    const popupState = useSelector(selectpopupSate);

    const connect_wallet = async (e, key) => {
        console.log('connect wallet');
        setConnecting(key);
        await activate(metamask, async (error) => {
            console.error(error);
            if(error.name == 'UnsupportedChainIdError') {
              
            }
          });
        setConnecting(-1);
        dispatch(setpopupSate(true));
    }

    useEffect(() => {
        console.log(account);
    }, [account]);

    return (
        <Popup className={cn('xl:min-w-[500px] min-h-0', className)} {...{ hidden, onClose}}>
            {
                wallets.map(({title, description, image}, key) => (
                    <div className='flex flex-col items-center border rounded-[8px] px-[12px] py-[20px] hover:bg-[#eee] mb-[20px] cursor-pointer select-none relative'
                        onClick={e => connect_wallet(e, key)}
                        key={key}
                    >
                        <Image width='50px' height='50px' src={image} />
                        <h1 className='text-[28px] font-bold mt-[12px]'>{title}</h1>
                        <h2 className='text-[16px] text-[#555]'>{description}</h2>
                        <div className='absolute top-6'>
                            {
                                isConnecting == key && <PuffLoader color='blue' size={120} className='absolute' />
                            }
                        </div>
                    </div>
                ))
            }
        </Popup>
    )
}

const wallets = [
    {
        title: 'MetaMask',
        description: 'Connect to your MetaMask wallet',
        image: '/images/metamask.svg'
    },
    {
        title: 'WalletConnect',
        description: 'Scan with WalletConnect to connect',
        image: '/images/walletconnect.svg'
    },
]