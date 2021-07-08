import React, { useContext } from 'react'
import TableHeader from './TableHeader'
import Box from './Box'
import blackboard from '../assets/blackboard.svg'
import hourGlass from '../assets/sand-clock.svg'
import { AppContext } from '../AppContext'
import {FaChalkboardTeacher} from 'react-icons/fa'
import './Teacher.scss'

function Teacher() {

    const { theme } = useContext(AppContext);
    return (
        <Box cls={`student__section${theme ? ' dark' : ''}`}>
            <TableHeader headerText='Demo Teacher' Icon={FaChalkboardTeacher} />
            <div className='class__info'>
                <div className='info__box'>
                    <img src={blackboard} alt="logo" />
                    <span>Demo class for Utkarsh</span> 
                </div>
                <div className='class__start__time'>
                    starts in 5 hrs 19 M 20 s
                </div>
            </div>
            <div className='date'>
                <img src={hourGlass} alt="logo" />
                <span>Thu, May 27, 2021 8:00 PM</span>
            </div>
        </Box>
    )
}

export default Teacher
