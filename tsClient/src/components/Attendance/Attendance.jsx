import React from 'react'
import './Attendance.scss'
import { COLUMNS } from '../table_data/Attendance'
import Table from '../Table/Table'

function Attendance() {
    
    return (
        <section>
            <div className='header__main'>
                Attendances
            </div>
            <Table columns={COLUMNS}/>
        </section>
    )
}

export default Attendance
