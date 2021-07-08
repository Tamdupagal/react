import React from 'react'
import { Box } from "@material-ui/core";

// import TableHeader from '../TableHeader/TableHeader'
// import './Scheduler.scss'
import SlotBox from './SlotBox'


function Scheduler() {
    
    return (
        <Box>
            {/* <TableHeader headerText="Teacher schedule" /> */}
            <SlotBox/>
        </Box>
    )
}

export default Scheduler
