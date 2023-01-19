import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { selectmaintenanceState } from "store/slices/maintenanceSlice";
import useSWR from 'swr';
import cn from 'classnames';
import { fetcher } from "utils";

function Layout({children, title}) {
    // const { data: info } = useSWR(`/api/systemstatus`, fetcher);
    const info = {};
    return (
        <div className='flex min-h-screen w-full'>
            <Sidebar merchantStatus={!info?.merchantStatus == 1} />
            <div className='flex flex-col w-full bg-[#f5f6f8] '>
                <Header />
                <div className='flex-grow pb-4'>
                    <div className="min-h-full bg-[#F0F3F4]">
                        <div className="flex justify-between bg-[#F6F8F8] border-b border-[#DEE5E7] h-[64px] items-center pl-[27px] pr-[30px]">
                            <span className='text-[20px]'>{title}</span>
                            <div className="flex items-center text-[12px]">
                                <span className="font-medium pr-1">Maintenance Mode:</span>
                                <span className={cn("text-white px-[7px] rounded-[3px]", info?.maintenanceMode == 0 ? 'bg-[#27C24C]' : 'bg-[#F05050]')}>
                                    {info?.maintenanceMode == 1 ? "Yes" : "No"}
                                </span>
                            </div>
                        </div>
                        <div className='px-[30px] pt-[30px]'>
                            {children}
                        </div>
                    </div>
                </div>
                {/* <Footer/> */}
            </div>
        </div>
    )
}

export default Layout;