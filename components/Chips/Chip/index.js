import alpha from 'color-alpha'
import cn from 'classnames'

export default function Chip( { label, color, className }) {
    return (
        <span className={cn('rounded-[4px] py-1 px-4 font-medium text-[11px]', className)} 
            style={{color, backgroundColor: alpha(color, .15)}}>
            {label}
        </span>
    )
}