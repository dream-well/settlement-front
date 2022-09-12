import Image from "next/image"
import Popup from "../Popup"
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from "@web3-react/injected-connector";
import cn from 'classnames'

const metamask = new InjectedConnector({
    supportedChainIds: [4]
  }); 

export default function WalletPopup({ className, hidden, onClose }) {
    return (
        <Popup className={cn('xl:min-w-[500px] min-h-0', className)} {...{ hidden, onClose}}>
            {
                wallets.map(({title, description, image}) => (
                    <div className='flex flex-col items-center border rounded-[8px] px-[12px] py-[20px] hover:bg-[#eee] mb-[20px] cursor-pointer select-none'>
                        <Image width='50px' height='50px' src={image} />
                        <h1 className='text-[28px] font-bold mt-[12px]'>{title}</h1>
                        <h2 className='text-[16px] text-[#555]'>{description}</h2>
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