
import cn from 'classnames'
import { getCellText } from '../util'

function Table( {cols, rows, className} ) {
    return (
        <table className={cn('border-grey border-t border-b w-full', className)}>
            <thead>
                <tr className='px-[20px]'>
                    {
                        cols[0].type != 'id' &&
                        <th className='text-left py-[12px] pl-[20px] pr-[4px]'>
                            #
                        </th>
                    }
                    {
                        cols.map((col, key) => (
                            <th key={key} className='text-left py-[12px] px-[4px]'>
                            {
                                col.text
                            }
                            </th>
                        ))
                    }
                </tr>
            </thead>
            <tbody className='relative'>
                {
                    rows.map((row, key) => (
                        <tr key={key} className='border-grey border-t'>
                            {
                                cols[0].type != 'id' &&
                                <td className='text-left py-[12px] pl-[20px] pr-[4px]'>
                                    {key + 1}
                                </td>
                            }
                            {
                                cols.map((col, key) => (
                                    <td className='py-[12px] px-[4px]' key={key} >
                                        {
                                            getCellText(row, col)
                                        }
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )   
}

export default Table