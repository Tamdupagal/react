import React from 'react'
import Board from '../../components/Board'
import Teacher from '../../components/Teacher'
import Course from '../../components/Course'

import './Library.scss'

function Library() {
    return (
        <>
            <div className="flex__row__1">
                <Teacher />
                <Board />
            </div>
            <div className="flex__row__3">
                <Course/>
            </div>
        </>
    )
}

export default Library
