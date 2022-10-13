import cn from 'classnames'
import { PuffLoader } from 'react-spinners';

function Box({title, value, className, src}) {
    return (
        <div className={cn('min-w-[200px] h-[180px] flex flex-col bg-white items-center justify-center', className)}>
            <div className='w-[77px] h-[77px] bg-[#F6F8F8] rounded-full flex justify-center items-center'>
                <img src={src} />
            </div>
            <div className='text-[12px] text-[#869FB1] uppercase pt-[24px] text-center px-[16px]'>{title}</div>
            <div className='text-[24px] font-medium'>
                {value}
                {
                    value == null && 
                    <PuffLoader color='grey' size={36} />
                }
            </div>
        </div>
    )
}

export default Box;