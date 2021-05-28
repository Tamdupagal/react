import React, { useContext, useEffect, useState } from 'react'
import Box from '../Box/Box'
import TableHeader from '../TableHeader/TableHeader'
import Slot from '../Slot/Slot'
import Checkbox from '../Slot/Checkbox'
import './Scheduler.scss'
import { context } from '../../store/Context'
import SlotBox from '../Slot/SlotBox'

// const SLOTS__FOR = [
//     "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
// ]

function Scheduler() {
    
    return (
        <Box>
            <TableHeader headerText="Teacher schedule" />
            <SlotBox/>
        </Box>
    )
}

export default Scheduler
