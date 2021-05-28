import React from 'react'
import {COLUMNS} from '../../table_data/Report'
import Table from '../../Table/Table'
import Box from '../../Box/Box'
import TableHeader from '../../TableHeader/TableHeader'

function Report() {
    return (
        <Box>
            <TableHeader headerText="My Report" />
            <Table columns={COLUMNS}/>
        </Box>
    )
}

export default Report
