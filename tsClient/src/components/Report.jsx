import React from 'react'
import {COLUMNS} from '../helpers/Report'
import Table from './Table'
import Box from './Box'
import TableHeader from './TableHeader'

function Report() {
    return (
        <Box>
            <TableHeader headerText="My Report" />
            <Table columns={COLUMNS}/>
        </Box>
    )
}

export default Report
