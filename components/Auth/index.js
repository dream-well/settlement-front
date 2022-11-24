import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { isValidToken } from "utils";

const auth_pages = {
    "/signature": true,
    "/chargebacks": true,
    "/systeminfo": true,
    "/withdrawals": true,
    "/swap": true,
    '/': true,
}

function Auth({children}) {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const expireAt = localStorage.getItem('expireAt');
        if(token && !isValidToken(token)) {
            localStorage.removeItem('token');
            localStorage.removeItem('expireAt');
            router.replace('/login');
        }
        if(!token) {
            router.replace('/login');
        }
        
    }, [router.pathname])

    return (
        <div>
            {children}
        </div>
    )
}

export default Auth;