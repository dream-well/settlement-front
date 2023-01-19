import Link from "next/link";
import { useRouter } from "next/router";
import cn from 'classnames';
import { selectMenuState } from "../../../store/slices/menuSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import Image from 'next/image';

export default function Sidebar({merchantStatus}) {

    const router = useRouter();
    const menuState = useSelector(selectMenuState);

    return (
        <div className={cn('bg-[#33414E] flex flex-col w-[300px] shadow-[0_2px_150px_0px_rgba(90,97,105,0.1)] z-10 transition-all duration-500', menuState == 'hidden' && '-ml-[300px]')}>
            <nav className='h-[60px] bg-[#2E3A46] flex justify-center items-center w-full'>
                <Image src='/images/logo.svg' width='153px' height='32px'/>
            </nav>
            <div className="py-6 px-4 text-white text-[12px] text-center border-b border-[#2F3C48] h-[64px]">
                Merchant Status: &nbsp;
                <span className={cn("px-[7px] rounded-[3px]", merchantStatus ? 'bg-[#27C24C]' : 'bg-[#F05050]')}>
                    { merchantStatus ? "Active" : "Inactive" }
                </span>
            </div>
            <ul>
            {
                menu.map(({text, href, icon}, key) => (
                    <li key={key} className={
                        cn('h-[50px] hover:text-[#eee] flex border-b border-[#2F3C48]', 
                        // inset 0.1875rem 0 0 #007bff
                        href == router.pathname ? 'text-white': 'text-[#869FB1]')}
                    >
                        <Link href={href}>
                            <div className='px-[25px] flex justify-center items-center py-[15px] cursor-pointer'>
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
    // {
    //     text: 'Signature',
    //     href: '/signature',
    //     icon: 'assignment'
    // },
    // {
    //     text: 'Dashboard',
    //     href: '/dashboard',
    //     icon: 'groups'
    // },
    {
        text: 'Settlements',
        href: '/settlements',
        icon: 'payments'
    },
    {
        text: 'Exchange',
        href: '/exchange',
        icon: 'account_balance'
    },
    // {
    //     text: 'System Info',
    //     href: '/systeminfo',
    //     icon: 'info'
    // },   
]