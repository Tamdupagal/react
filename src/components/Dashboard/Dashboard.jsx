import React from 'react'
import './Dashboard.scss';
import TableHeader from '../TableHeader/TableHeader'
import hourGlass from '../../images/sand-clock.svg'
import Box from '../Box/Box'


const style = {
    margin: 'auto',
    marginTop: '1.5rem',
    width: "70%",
}
function Dashboard() {
    return (
        <Box style={style}>
                <TableHeader headerText="Upcomming classes" headerImg={hourGlass} />
                <h2>No Lectures right now</h2>
            </Box>
    )
}

export default Dashboard
