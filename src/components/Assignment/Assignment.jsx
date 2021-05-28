import React from 'react'
import './Assignment.scss'
import { COLUMNS } from '../table_data/Assignment'
import Table from '../Table/Table'
import {Link} from 'react-router-dom'

function Assignment() {
    return (
        <section>
            <div className='header__main'>
                <span>Assignments</span> 
                <Link className='assignment_button' to={location=>`${location.pathname}/create`}>Create Assignment</Link>
            </div>
            <Table columns={COLUMNS}/>
        </section>
    )
}

export default Assignment
