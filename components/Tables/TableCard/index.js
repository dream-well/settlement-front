
import cn from 'classnames'
import Table from '../Table'
import Image from 'next/image';
import { BeatLoader } from 'react-spinners';
import { useState } from 'react';
import { getCellText } from '../util';
import { renderToString } from 'react-dom/server';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function TableCard({ title, rows=[], cols=[], isLoading=false, children, lastRow}) {
    const [searchText, setSearchText] = useState('');
    let filteredRows = filterRows(cols, rows, searchText);
    const [page, setPage] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const total = filteredRows.length;
    filteredRows = filteredRows.slice(page * perPage, (page * perPage) + perPage);
    const maxPage = Math.ceil(total / perPage);
    const onPrev = () => { setPage(Math.max(0, page - 1)) };
    const onNext=()=>{ setPage(Math.min(maxPage-1, page+1))};

    return (
        <div className='bg-white rounded-[12px] shadow pb-[10px] px-6'>
            <div className='flex mb-2'>
                <div className='font-medium text-[22px] pt-7 pb-2 flex-grow'>
                    { title }
                </div>
            </div>
            {
                children
            }
            <div className='flex justify-between mt-3'>
                <div className='flex items-center'>
                    show 
                    <select
                        className='ml-6 border h-[25px] pl-2' 
                        onChange={(e) => {setPage(0),setPerPage(Number(e.target.value))}} 
                        value={perPage}
                    >
                        <option value='5'>5</option>
                        <option value='10'>10</option>
                        <option value='20'>20</option>
                        <option value='100'>100</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;entries
                </div>
                <div className='px-4 flex items-center'>
                    <div>Search:</div>
                    <input className='h-[30px] border mx-4 px-2 outline-none focus:border-[#76a] rounded-[4px]' 
                        value={searchText} 
                        onChange={e => setSearchText(e.target.value)} 
                        onKeyDown={e => {
                            if(e.key == "Enter")
                                onSearch({
                                    searchBy, searchText
                                });
                        }}
                    />
                </div>
            </div>
            <div className='min-h-[320px] w-full relative mt-5'>
                <Table cols={cols} rows={isLoading ? [] : (filteredRows.length > 0 && lastRow ? filteredRows.concat(lastRow): filteredRows)} index={page* perPage} lastRow={lastRow ? true : false} />
                {
                    isLoading && 
                        <div className='absolute w-full h-full'>
                            <div className='absolute flex flex-col items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            Loading
                            <BeatLoader color='grey' />
                            </div>
                        </div>
                    }
                    {
                    !isLoading && filteredRows.length == 0 &&
                    <div className='absolute w-full h-full'>
                        <div className='absolute flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <Image src='/images/no-content.svg' width='144' height='135' />
                            <div className='pt-[26px]'>
                                Sorry, No record found.
                            </div>
                        </div>  
                    </div>
                }
            </div>
            {
                total > 0 && 
                    <div className='py-4 px-4 w-full flex justify-between'>
                        {total && <span className='mx-4'>Total: {total}</span> }
                        <div className='flex'>
                            <button onClick={onPrev}>Previous</button>
                            <div className='outline-none border text-center px-3 mx-2'>  
                                {page + 1}
                            </div>
                            { maxPage > 0 && '/' }
                            { maxPage > 0 && <span className='mx-4'>{maxPage}</span> }
                            <button onClick={onNext}>Next</button>
                        </div>  
                    </div>
            }
        </div>
    )   
}

function filterRows(cols, rows, searchText) {
    const filteredRows = [];
    for(let row of rows) {
        for(let col of cols) {
            const value = getCellText(row, col);

            if(typeof value == 'string' && value.indexOf(searchText) >= 0) {
                filteredRows.push(row);
                break;
            }
            if(typeof value == 'object' && renderToString(value).indexOf(searchText) >= 0) {
                filteredRows.push(row);
                break;
            }
        }
    }
    return filteredRows;
}


export default TableCard