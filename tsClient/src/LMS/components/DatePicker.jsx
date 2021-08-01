import React from 'react'
import DayPickerInput from "react-day-picker/DayPickerInput";
import './DatePicker.scss';

function DatePicker(props) {
    return (
        <DayPickerInput placeholder="DD/MM/YYYY" format="DD/MM/YYYY"  {...props}/>
    )
}

export default DatePicker
