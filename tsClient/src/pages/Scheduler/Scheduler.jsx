import React from 'react'
import Box from '../../components/Box'
import TableHeader from '../../components/TableHeader'
import './Scheduler.scss'
import SlotBox from '../../components/SlotBox'


function Scheduler() {
    
    return (
        <Box>
            <TableHeader headerText="Teacher schedule" />
            <SlotBox/>
        </Box>
    )
}

export default Scheduler
