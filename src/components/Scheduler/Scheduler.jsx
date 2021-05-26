import React from 'react'
import Box from '../Box/Box'
import TableHeader from '../TableHeader/TableHeader'
import Slot from '../Slot/Slot'


function Scheduler() {
    return (
        <Box>
            <TableHeader headerText="Teacher schedule"/>
            <Slot/>
            <Slot/>
            <Slot/>
        </Box>
    )
}

export default Scheduler
