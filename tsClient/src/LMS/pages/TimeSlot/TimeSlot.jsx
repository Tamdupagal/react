import React from 'react'
import Das from '../../assets/das.png';
import './TimeSlot.scss'

function TimeSlot() {
    let date = useRef(new Date())
    let currentDate = d
    let currentTime = date.getHours();
    let bookingStartTime = 11;
    let bookingEndTime = 20;
    if (currentTime > 20) {
        date.setDate(currentDate + 1);
    }

    return (
        <section className="timeslot__wrapper">
            <div className="timeslot__box">
                <img src={Das} alt="logo" />
                <strong>Schedule Your Demo Class</strong>
                <p>Limited Slot Left!</p>
                <p className="container__title">Select a date</p>
                <div className="date__container">

                </div>
                <p className="container__title">Select a time for Mon, 21 jun</p>
                <div className="time__container">
                </div>
            </div>
        </section>  
    )
}

export default TimeSlot
