import α from 'color-alpha'

export default function Chip( { label, color }) {
    return (
        <span className='rounded-[4px] py-1 px-4 font-medium text-[11px]' style={{color, backgroundColor: α(color, .15)}}>
            {label}
        </span>
    )
}