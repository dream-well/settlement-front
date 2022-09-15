import cn from 'classnames'
import { useState } from 'react'

export default function Button({ children, className, color='white', bgColor='#6362e7', fontSize=16, type='fill', ...rest }) {

    const [isHover, setHover] = useState(false);

    return (
        <button className={cn('h-[35px] px-[16px] border rounded-[4px]', type == 'fill' && 'hover:brightness-125',className)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                color: type == 'inline' && isHover ? 'white' : color, 
                backgroundColor: type == 'inline' && isHover ? color : (type == 'fill' ? bgColor : 'white'),
                borderColor: type == 'fill'? bgColor: color,
                fontSize,
            }}
            { ...rest }
        >
            {children}
        </button>
    )
}