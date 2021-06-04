import React from 'react'
import './Assignment.scss'
import { COLUMNS } from '../../helpers/Assignment'
import Table from '../../components/Table'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import TableHeader from '../../components/TableHeader'

function Assignment() {
    return (
        <Box>
            <TableHeader className='header__main' headerText={'Assignments'}>
                <Link className='assignment_button' to={location=>`${location.pathname}/create`}>Create Assignment</Link>
            </TableHeader>
            <Table columns={COLUMNS}/>
        </Box>
    )
}

export default Assignment
