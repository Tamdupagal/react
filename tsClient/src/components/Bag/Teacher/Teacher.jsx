import React from 'react'
import TableHeader from '../../TableHeader/TableHeader'
import Box from '../../Box/Box'
import teacher from '../../../images/teacher.svg'
import blackboard from '../../../images/blackboard.svg'
import hourGlass from '../../../images/sand-clock.svg'
import './Teacher.scss'

function Teacher() {
    return (
        <Box cls="student__section">
            <TableHeader headerText='Demo Teacher' headerImg={teacher} />
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
