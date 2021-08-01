import React from 'react'
import {STD_COLUMNS} from '../helpers/Assignment'
import Table from './Table'
import Box from './Box'
import TableHeader from './TableHeader'
import {FaBook} from 'react-icons/fa'
import './Student.scss'

function S_Asgn() {
    return (
        <Box cls="student__assignment__section" >
            <TableHeader headerText="Assignment" Icon={FaBook}/>
            <Table columns={STD_COLUMNS}/>
        </Box>
    )
}

export default S_Asgn
