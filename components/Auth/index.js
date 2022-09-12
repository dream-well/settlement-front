import { useEffect } from "react";
import { useRouter } from 'next/router'
import { useWeb3React } from '@web3-react/core';

const auth_pages = {
    "/users": true,
    "/admin": true,
    '/dashboard': true,
    '/sales': true,
    '/artists': true,
    '/users': true,
    '/genres': true,
    '/projects': true,
    '/variants': true,
    '/auctions': true,
    '/transactions': true,
    '/offers': true,
    '/': true,
}

function Auth({children}) {
    const router = useRouter();
    const { account, error } = useWeb3React();

    useEffect(() => {
        console.warn("auth error", error);

        if(auth_pages[router.pathname]) {
            if(!account) {
                // router.replace('/signin');
            }
        }
    }, [account, error])

    return (<div>{children}</div>)
}

export default Auth;