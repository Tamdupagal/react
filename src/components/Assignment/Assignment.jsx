import React from 'react'
import './Assignment.scss'
import { COLUMNS } from '../table_data/Assignment'
import Table from '../Table/Table'

function Assignment() {
    return (
        <section>
            <div className='header__main'>
                <span>Assignments</span> 
                <button className='assignment_button'>Create Assignment</button>
            </div>
            <Table columns={COLUMNS}/>
        </section>
    )
}

export default Assignment
