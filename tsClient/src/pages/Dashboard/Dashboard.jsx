import React from 'react'
import './Dashboard.scss';
import TableHeader from '../../components/TableHeader'
import hourGlass from '../../assets/sand-clock.svg'
import Box from '../../components/Box'


const style = {
    margin: 'auto',
    marginTop: '1.5rem',
    width: "70%",
}
function Dashboard() {
    return (
        <Box style={style}>
                <TableHeader headerText="Upcomming classes" headerImg={hourGlass} />
                <h2 className="dashboard__title">No Lectures right now</h2>
            </Box>
    )
}

export default Dashboard
