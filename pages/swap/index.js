import Button from "components/Buttons/Button"
import Layout from "components/Layout"

export default function Swap() {

    return (
        <Layout title="Swap">
            <div className='flex flex-col px-[30px] pt-[30px] pb-[20px] w-[400px] bg-white rounded-[12px]'>
                <div className='flex justify-between'>
                    <Button>Swap</Button>
                    <h2>DR Balance: $ 7200.0</h2>
                </div>
                <label className='mt-[32px] text-[#333] text-sm'>DR Value</label>
                <div className='flex mt-[4px] border rounded-[4px]'>
                    <input className='flex-grow px-[12px] outline-none  py-[4px]' placeholder='7,904.65'/>
                    <button className='w-[46px] border-l py-[4px]'>DR</button>
                </div>
                <span className='text-[12px] mt-[4px]'>Note: You are allowed to swap only 50% of the total avaiable balance</span>
                <label className='mt-[26px]'>You will get</label>
                <div className='flex mt-[4px] border rounded-[4px]'>
                    <input className='flex-grow px-[12px] outline-none  py-[4px]' placeholder='58,794.53'/>
                    <button className='w-[46px] border-l py-[4px]'>BUSD</button>
                </div>
                <div className='mt-[16px]'>
                    <Button>Swap Now!</Button>              
                </div>
            </div>
        </Layout>
    )
}