import Link from "next/link";
import { useRouter } from "next/router";
import cn from 'classnames';
import { selectMenuState } from "../../../store/slices/menuSlice";
import { useSelector } from "react-redux";


export default function Sidebar() {

    const router = useRouter();

    const menuState = useSelector(selectMenuState);
    
    return (
        <div className={cn('flex flex-col w-[242px] shadow-[0_2px_150px_0px_rgba(90,97,105,0.1)] z-10', menuState == 'hidden' && 'hidden')}>
            <nav className='h-[60px] w-full text-center leading-[60px] border-b border-[#e1e5eb] text-[#222] font-medium mb-[2px]'>
                <div className='flex items-center justify-center cursor-pointer text-[20px]'>
                    <i className='material-icons'>attach_money</i>
                    <span className='ml-[4px]'>
                        <span className='text-[#f39c2b]'>Digi</span>
                        <span className='text-[#40496b]'>rupee</span>
                    </span>
                </div>
            </nav>
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
        href: '/dashboard',
        icon: 'money'
    },
    {
        text: 'Withdrawals',
        href: '/sales',
        icon: 'contacts'
    },
    {
        text: 'Swap',
        href: '/artists',
        icon: 'swap_horiz'
    },
    {
        text: 'Rolling Reserve',
        href: '/users',
        icon: 'diamond'
    },
    {
        text: 'Chargebacks',
        href: '/genres',
        icon: 'calendar_today'
    },
    {
        text: 'Fee Structure',
        href: '/projects',
        icon: 'forum'
    },
    {
        text: 'System Info',
        href: '/variants',
        icon: 'info'
    },   
]