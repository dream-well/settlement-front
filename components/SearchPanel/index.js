import Button from "components/Buttons/Button"
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Autocomplete } from "@mui/material";

export default function SearchPanel() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const status = null, searchby = null;
    return (
        <div className='flex flex-col px-8 py-6 bg-white rounded-[8px] my-4'>
            <div className='font-medium text-[20px] py-[16px] flex-grow'>
                Search
            </div>
            <div className="flex justify-between">
                <div className="w-[320px] text-[#6a7599]">From date</div>
                <div className="w-[320px] text-[#6a7599]">To date</div>
                <div className="w-[320px] text-[#6a7599]">Status</div>
            </div>
            <div className="flex justify-between mt-3">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        className="w-[320px]"
                        value={ startDate }
                        onChange={(newDate) => { setStartDate(newDate); }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <DatePicker
                        className="w-[320px]"
                        value={ endDate }
                        onChange={(newDate) => { setEndDate(newDate); }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={status_options}
                    sx={{ width: 320 }}
                    value={ status }
                    renderInput={(params) => <TextField {...params} placeholder="Choose..."/>}
                />
            </div>
            <div className="flex justify-between mt-5">
                <div className="w-[320px] text-[#6a7599]">Search By</div>
                <div className="w-[320px] text-[#6a7599]">Search by Email</div>
                <div className="w-[320px]"> </div>
            </div>
            <div className="flex justify-between mt-3">
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={searchby_options}
                    sx={{ width: 320 }}
                    value={ searchby }
                    renderInput={(params) => <TextField {...params} placeholder="Choose..."/>}
                />
                <TextField id="outlined-basic" className="w-[320px]" variant="outlined" />
                <Button bgColor="#6362e7" className="w-[320px] h-[55px]">Search</Button>
            </div>
        </div>
    );
}

const status_options = [
    { label: 'success', year: 1994 },
    { label: 'Failed', year: 1972 },
    { label: 'Pending', year: 1973 },
];

const searchby_options = [
    { label: 'Email ID', year: 1993 },
    { label: 'Order ID', year: 19723 },
];