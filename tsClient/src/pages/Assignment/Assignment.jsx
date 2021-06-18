import React, { useEffect } from 'react'
import './Assignment.scss'
import { COLUMNS } from '../../helpers/Assignment'
import Table from '../../components/Table'
import { Link, useRouteMatch, Switch, Route} from 'react-router-dom'
import Box from '../../components/Box'
import TableHeader from '../../components/TableHeader'
import CreateAs from '../../components/CreateAs'


function Assignment() {

    const { path} = useRouteMatch()
    return (
                    <Box>
                        <TableHeader className='header__main' headerText={'Assignments'}>
                            <Link className='assignment_button' to={`${path}/create`}>Create Assignment</Link>
                        </TableHeader>
                        <Table columns={COLUMNS} />
                    </Box>
    )
}

export default Assignment
