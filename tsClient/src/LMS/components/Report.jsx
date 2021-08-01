import React from 'react'
import {COLUMNS} from '../helpers/Report'
import Table from './Table'
import Box from './Box'
import TableHeader from './TableHeader'
import {FaIdCard} from 'react-icons/fa'

function Report() {
    return (
        <Box>
            <TableHeader headerText="My Report" Icon={FaIdCard}/>
            <Table columns={COLUMNS}/>
        </Box>
    )
}

export default Report
