import React from 'react'
import './Attendance.scss'
import { COLUMNS } from '../../helpers/Attendance'
import Table from '../../components/Table'
import Box from '../../components/Box'
import TableHeader from '../../components/TableHeader'


function Attendance() {
    
    return (
        <Box>
            <TableHeader headerText={'Attendances'}/>
            <Table columns={COLUMNS}/>
        </Box>
    )
}

export default Attendance
