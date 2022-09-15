import Link from "next/link";
import { useRouter } from "next/router";
import cn from 'classnames';
import { selectMenuState } from "../../../store/slices/menuSlice";
import { useSelector } from "react-redux";


export default function Sidebar() {

    const router = useRouter();

    const menuState = useSelector(selectMenuState);

    return (
        <div className={cn('flex flex-col w-[242px] shadow-[0_2px_150px_0px_rgba(90,97,105,0.1)] z-10 transition-all duration-500', menuState == 'hidden' && '-ml-[242px] opacity-0')}>
            <nav className='h-[60px] w-full text-center leading-[60px] border-b border-[#e1e5eb] text-[#222] font-medium mb-[2px]'>
                <div className='flex items-center cursor-pointer text-[20px] ml-[26px]'>
                    <i className='material-icons'>attach_money</i>
                    <span className='ml-[4px]'>
                        <span className='text-[#f39c2b]'>Digi</span>
                        <span className='text-[#40496b]'>rupee</span>
                    </span>
                </div>
            </nav>
            <div className="py-6 px-4">
                <div className="bg-[#e5f3cd] text-[#7dc006] text-center text-[11px] px-[20px] py-[10px] rounded-md">
                    Merchant Status: Active
                </div>
            </div>
            <ul>
            {
                menu.map(({text, href, icon}, key) => (
                    <li key={key} className={
                        cn('h-[50px] text-[#3d5170] hover:text-[#007bff] flex', 
                        // inset 0.1875rem 0 0 #007bff
                        href == router.pathname ? 'shadow-[inset_3px_0_0_0_#007bff] text-[#007bff]': '')}
                    >
                        <Link href={href}>
                            <div className='px-[25px] flex justify-center py-[15px] cursor-pointer'>
                                <i className='material-icons'>{icon}</i>
                                <span className='ml-[4px]'>{text}</span>
                            </div>
                        </Link>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}


const menu = [
    {
        text: 'Deposits',
        href: '/deposits',
        icon: 'money'
    },
    {
        text: 'Withdrawals',
        href: '/withdrawals',
        icon: 'contacts'
    },
    {
        text: 'Swap',
        href: '/swap',
        icon: 'swap_horiz'
    },
    {
        text: 'Chargebacks',
        href: '/chargebacks',
        icon: 'calendar_today'
    },
    {
        text: 'Fee Structure',
        href: '/fees',
        icon: 'forum'
    },
    {
        text: 'System Info',
        href: '/systeminfo',
        icon: 'info'
    },   
    {
        text: 'Auto Settlements',
        href: '/autosettlements',
        icon: 'info'
    },
]