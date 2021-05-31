import React from 'react'
import Box from '../Box/Box'
import TableHeader from '../TableHeader/TableHeader'
import './Scheduler.scss'
import SlotBox from '../Slot/SlotBox'


function Scheduler() {
    
    return (
        <Box>
            <TableHeader headerText="Teacher schedule" />
            <SlotBox/>
        </Box>
    )
}

export default Scheduler
