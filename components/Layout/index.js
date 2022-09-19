import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { selectmaintenanceState } from "store/slices/maintenanceSlice";

function Layout({children, title}) {
    const maintenanceState = useSelector(selectmaintenanceState);
    return (
        <div className='flex min-h-screen w-full'>
            <Sidebar />
            <div className='flex flex-col w-full'>
                <Header />
                <div className='bg-[#f5f6f8] flex-grow px-4'>
                    <div className="min-h-full">
                        <div className="flex justify-between">
                            <h3 className='py-4 text-[25px] font-bold text-[#1e2f65]'>{title}</h3>
                            <div className="flex items-center py-4">
                                <span className="font-medium text-[12px]">Maintenance Mode:</span>
                                {
                                    maintenanceState ?
                                    <span className="bg-[#dceacb] text-[#b5c918] text-[10px] rounded-sm mx-1 px-1">Yes</span> : 
                                    <span className="bg-[#fad4d4] text-[#e82c5d] text-[10px] rounded-sm mx-1 px-1">No</span>    
                                }
                            </div>
                        </div>
                        {children}
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Layout;