import React from 'react';
import Board from '../../components/Board'
import Teacher from '../../components/Teacher'
import Student from '../../components/Student'
import Report from '../../components/Report'
import Course from '../../components/Course'
import './Bag.scss';

function Bag() {
    return (
        <>
            <div className="flex__row__1">
                <Teacher />
                <Board />
            </div>
            <div className="flex__row__2">
                <Student />
                <Report />
            </div>
            <div className="flex__row__3">
                <Course/>
            </div>
        </>
    )
}

export default Bag
