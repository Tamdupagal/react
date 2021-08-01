import React from 'react'
import Board from '../../components/Board'
import Teacher from '../../components/Teacher'
import './LiveClass.scss'

function LiveClass() {
    return (
        <div className="flex__row__1">
            <Teacher />
            <Board />
        </div>
    )
}

export default LiveClass
