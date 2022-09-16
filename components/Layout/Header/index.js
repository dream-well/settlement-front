import { useWeb3React } from "@web3-react/core";
import { useDispatch, useSelector } from "react-redux";
import { truncateAddress } from "utils";
import { selectMenuState, setMenuState } from "store/slices/menuSlice";
import { selectpopupSate, setpopupSate } from "store/slices/popupSlice"
import WalletPopup from "components/Popups/WalletPopup";
import Button from "components/Buttons/Button";

function Header() {

    const menuState = useSelector(selectMenuState);
    const { account, error } = useWeb3React();
    const dispatch = useDispatch();
    const popupState = useSelector(selectpopupSate);

    return (
        <div className='w-full flex items-center justify-between bg-white h-[60px] shadow-[0_2px_10px_0px_rgba(90,97,105,0.12)] px-4'>
            <button onClick={() => { dispatch(setMenuState(menuState == 'hidden' ? 'show' : 'hidden'))}}>
                <i className='material-icons'>menu</i>
            </button>
            <div className='flex-grow'></div>
            {/* <Button>{account ? truncateAddress(account, 3) : 'Connect Wallet' }</Button>
            <button className='ml-[12px]'>
                <i className='material-icons'>dark_mode</i>
            </button> */}
            <Button className="bg-[#6362e7] text-[#fff] h-[40px] rounded-[5px] p-[8px]" onClick={() => { dispatch(setpopupSate(false)) }}>
                    {account ? truncateAddress(account, 3) : 'Connect Wallet' }
            </Button>
            <WalletPopup hidden={popupState} onClose={() => { dispatch(setpopupSate(true)) }}/>
        </div>
    )
}

export default Header;