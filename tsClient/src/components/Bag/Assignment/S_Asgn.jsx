import React from 'react'
import {STD_COLUMNS} from '../../table_data/Assignment'
import Table from '../../Table/Table'
import Box from '../../Box/Box'
import TableHeader from '../../TableHeader/TableHeader'
import './S_Asgn.scss'

function S_Asgn() {
    return (
        <Box cls="student__assignment__section" >
            <TableHeader headerText="Assignment" />
            <Table columns={STD_COLUMNS}/>
        </Box>
    )
}

export default S_Asgn
