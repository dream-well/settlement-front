import { useWeb3React } from "@web3-react/core";
import { useDispatch, useSelector } from "react-redux";
import { truncateAddress } from "utils";
import { selectMenuState, setMenuState } from "store/slices/menuSlice";
import { selectpopupSate, setpopupSate } from "store/slices/popupSlice"
import { Button, IconButton } from '@mui/material'
import { Menu } from '@mui/icons-material'
import WalletPopup from "components/Popups/WalletPopup";


function Header() {

    const menuState = useSelector(selectMenuState);
    const { account, error } = useWeb3React();
    const dispatch = useDispatch();
    const popupState = useSelector(selectpopupSate);

    return (
        <div className='w-full flex items-center justify-between bg-[#33414E] h-[60px] px-4'>
            <IconButton className='text-white' onClick={() => { dispatch(setMenuState(menuState == 'hidden' ? 'show' : 'hidden'))}}>
                <Menu color="inherit" className='text-white'/>
            </IconButton>
            <Button variant="contained" className='h-[45px] bg-[#23B7E5] hover:bg-[#20A8D2] active:bg-[#0082AB]' onClick={() => { dispatch(setpopupSate(false)) }}>
                {account ? truncateAddress(account, 3) : 'Connect Wallet' }
            </Button>
            <WalletPopup hidden={popupState} onClose={() => { dispatch(setpopupSate(true)) }}/>
        </div>
    )
}

export default Header;