import Button from "components/Buttons/Button"
import Layout from "components/Layout"
import SearchPanel from "components/SearchPanel"
import Image from "next/image"

export default function Deposits() {

    return (
        <Layout title="Deposit">
            <div className='flex px-8 py-6 bg-white rounded-[8px] w-[320px] shadow-lg'>
                <div className='flex flex-col'>
                    <label className='text-[14px]'>Deposit Wallet Balance:</label>
                    <span className='mt-[8px] font-medium text-[16px]'>12,000,000 GR</span>
                    <div className='mt-[20px]'>
                        <Button color='#f6c822' type='inline'>
                            Swap to BUSD
                        </Button>
                    </div>
                </div>                
                <div className='flex justify-center items-center flex-grow'>
                    <Image src='/images/dollar.svg' width='48px' height='48px'/>
                </div>
            </div>
            <SearchPanel />
        </Layout>
    )
}