import Link from "next/link";
import { useRouter } from "next/router";
import cn from 'classnames';
import { selectMenuState } from "../../../store/slices/menuSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Sidebar({merchantStatus}) {

    const router = useRouter();
    const menuState = useSelector(selectMenuState);

    return (
        <div className={cn('flex flex-col w-[350px] shadow-[0_2px_150px_0px_rgba(90,97,105,0.1)] z-10 transition-all duration-500', menuState == 'hidden' && '-ml-[350px] opacity-0')}>
            <nav className='h-[60px] w-full text-center leading-[60px] border-b border-[#e1e5eb] text-[#222] font-medium mb-[2px]'>
                <div className='flex items-center cursor-pointer text-[20px] ml-[26px]'>
                    <i className='material-icons'>attach_money</i>
                    <span className='ml-[4px]'>
                        <span className='text-[#f39c2b]'>Rupee</span>
                        <span className='text-[#40496b]'>cash</span>
                    </span>
                </div>
            </nav>
            <div className="py-6 px-4">
                <div className={cn("text-center text-[11px] px-[20px] py-[10px] rounded-md", merchantStatus && "bg-[#e5f3cd] text-[#7dc006]", merchantStatus || "bg-[#fad4d4] text-[#e82c5d]")}>
                    Merchant Status: { merchantStatus ? "Active" : "Inactive" }
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
        text: 'Signature',
        href: '/signature',
        icon: 'assignment'
    },
    {
        text: 'Dashboard',
        href: '/dashboard',
        icon: 'groups'
    },
    {
        text: 'Deposits',
        href: '/deposits',
        icon: 'money'
    },
    {
        text: 'Payouts',
        href: '/payouts',
        icon: 'contacts'
    },
    {
        text: 'Settlements',
        href: '/settlements',
        icon: 'payments'
    },
    {
        text: 'Rolling Reserve',
        href: '/rollingreserve',
        icon: 'account_balance'
    },
    {
        text: 'Chargebacks',
        href: '/chargebacks',
        icon: 'calendar_today'
    },
    {
        text: 'System Info',
        href: '/systeminfo',
        icon: 'info'
    },   
]