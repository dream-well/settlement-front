import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { selectmaintenanceState } from "store/slices/maintenanceSlice";
import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json());

function Layout({children, title}) {
    const { data: info } = useSWR(`/api/systemstatus`, fetcher);
    return (
        <div className='flex min-h-screen w-full'>
            <Sidebar merchantStatus={!info?.merchantStatus == 1} />
            <div className='flex flex-col w-full bg-[#f5f6f8] '>
                <Header />
                <div className='flex-grow px-4'>
                    <div className="min-h-full">
                        <div className="flex justify-between">
                            <h3 className='py-8 pl-2 text-[25px] font-bold text-[#1e2f65]'>{title}</h3>
                            <div className="flex items-center">
                                <span className="font-medium text-[12px]">Maintenance Mode:</span>
                                {
                                    info?.maintenanceMode == 1 ?
                                    <span className="bg-[#dceacb] text-[#b5c918] text-[10px] rounded-sm mx-1 px-1">Yes</span> : 
                                    <span className="bg-[#fad4d4] text-[#e82c5d] text-[10px] rounded-sm mx-1 px-1">No</span>    
                                }
                            </div>
                        </div>
                        {children}
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Layout;