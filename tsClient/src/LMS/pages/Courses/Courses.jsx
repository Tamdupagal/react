import React from 'react'
import Teacher from '../../components/Teacher'
import Board from '../../components/Board'
import './Courses.scss'

function Courses() {
    return (
        <div className="flex__row__1">
            <Teacher/>
            <Board/>
        </div>
    )
}

export default Courses