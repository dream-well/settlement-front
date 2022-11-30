import CopyIcon from '@rsuite/icons/Copy';

export default function CopyText( { label, text, className }) {

    const onCopyBtnClicked = () => {
        navigator.clipboard.writeText(text);
    }
    
    return (
        <span className={className} >
            {label}
            <CopyIcon className='ml-1 -mt-1 cursor-pointer' onClick={onCopyBtnClicked}/>
        </span>
    )
}