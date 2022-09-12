import cn from 'classnames'

export default function Button({ children, className, color='white', bgColor='#6362e7', fontSize=16 }) {
    return (
        <button className={cn('h-[35px] px-[16px] rounded-[4px]', className)}
            style={{
                color, 
                backgroundColor: bgColor,
                fontSize
            }}    
        >
            {children}
        </button>
    )
}