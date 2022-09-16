import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function Layout({children, title}) {
    return (
        <div className='flex min-h-screen w-full'>
            <Sidebar />
            <div className='flex flex-col w-full'>
                <Header />
                <div className='bg-[#f5f6f8] flex-grow px-4'>
                    <h3 className='py-4 text-[25px] font-bold text-[#1e2f65]'>{title}</h3>
                    {children}
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Layout;