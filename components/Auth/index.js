import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { useWeb3React } from '@web3-react/core';
import WalletPopup from "../Popups/WalletPopup";

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
    const [popupHidden, setPopupHidden] = useState(true);

    useEffect(() => {
        console.warn("auth error", error);

        if(auth_pages[router.pathname]) {
            if(!account) {
                // router.replace('/signin');
                setPopupHidden(false);
            }
        }
    }, [account, error])

    return (
        <div>
            {children}
            <WalletPopup hidden={popupHidden} onClose={() => setPopupHidden(true)}/>
        </div>
    )
}

export default Auth;