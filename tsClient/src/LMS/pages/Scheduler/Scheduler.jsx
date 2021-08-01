import React from 'react'
import Box from '../../components/Box'
import TableHeader from '../../components/TableHeader'
import './Scheduler.scss'
import SlotBox from '../../components/SlotBox'
import { FaCalendarAlt} from 'react-icons/fa'


function Scheduler() {
    
    return (
        <Box>
            <TableHeader headerText="Teacher schedule" Icon={FaCalendarAlt}/>
            <SlotBox/>
        </Box>
    )
}

export default Scheduler
