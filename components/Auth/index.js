import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { useWeb3React } from '@web3-react/core';
import WalletPopup from "../Popups/WalletPopup";
import { InjectedConnector } from "@web3-react/injected-connector";

const auth_pages = {
    "/chargebacks": true,
    "/systeminfo": true,
    "/withdrawals": true,
    "/swap": true,
    '/': true,
}

const metamask = new InjectedConnector({
    supportedChainIds: [316]
  });

function Auth({children}) {
    const router = useRouter();
    const { activate, account, error, library } = useWeb3React();
    const [popupHidden, setPopupHidden] = useState(true);

    useEffect(() => {
        if(!library) return;
        console.log('library', library.provider);
        library.provider.on('accountsChanged', (accounts) => {
            console.log('accounts', accounts);
            if(accounts.length == 0) {
                localStorage.removeItem('account');
            }
        })
    }, [library])

    useEffect(() => {
        console.warn("auth error", error);

        if(auth_pages[router.pathname]) {
            if(!account) {
                console.log("error", error);
                if(localStorage.getItem('account')) {
                    activate(metamask, (e) => {
                        localStorage.removeItem('account');
                        setPopupHidden(false);
                    }).then(() => {
                        if(account)
                            localStorage.setItem('account', account);
                    })
                }
                else {
                    setPopupHidden(false);
                }
            }
            else {
                localStorage.setItem('account', account)
                setPopupHidden(true);
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