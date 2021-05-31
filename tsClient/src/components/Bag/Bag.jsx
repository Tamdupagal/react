import React from 'react';
import Board from './ScoreBoard/Board'
import Teacher from './Teacher/Teacher'
import S_Asgn from './Assignment/S_Asgn'
import Report from './Report/Report'
import Course from '../Course/Course'
import './Bag.scss';

function Bag() {
    return (
        <>
            <div className="flex__row__1">
                <Teacher />
                <Board />
            </div>
            <div className="flex__row__2">
                <S_Asgn />
                <Report />
            </div>
            <div className="flex__row__3">
                <Course/>
            </div>
        </>
    )
}

export default Bag
