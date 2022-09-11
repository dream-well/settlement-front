import { useDispatch, useSelector } from "react-redux";
import { selectMenuState, setMenuState } from "../../../store/slices/menuSlice";

function Header() {

    const menuState = useSelector(selectMenuState);
    const dispatch = useDispatch();

    return (
        <div className='w-full flex bg-white h-[60px] shadow-[0_2px_10px_0px_rgba(90,97,105,0.12)] px-4'>
            <button onClick={() => { dispatch(setMenuState(menuState == 'hidden' ? 'show' : 'hidden'))}}>
                <i className='material-icons'>menu</i>
            </button>
        </div>
    )
}

export default Header;