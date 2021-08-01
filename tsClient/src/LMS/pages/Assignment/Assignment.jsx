import React, { useContext, useEffect } from 'react'
import './Assignment.scss'
import { COLUMNS, TEACHER_DATA } from '../../helpers/Assignment'
import Table from '../../components/Table'
import {useRouteMatch, useHistory } from 'react-router-dom'
import Box from '../../components/Box'
import TableHeader from '../../components/TableHeader'
import { getAllAssignment } from '../../../action/actions'
import { toast } from 'react-toastify'
import Loader from '../../components/Loader'
import Button from '../../components/Button'
import {FiEdit} from 'react-icons/fi'
import {RiFileCopy2Fill} from 'react-icons/ri'
import { GET_ALL_ASSIGNMENT_REQUEST } from '../../../action/actionType'
import { AppContext } from '../../../AppContext'



function Assignment() {

    const { dispatch, state: { assignment : {data , isLoading} } } = useContext(AppContext)

    const history = useHistory()

    
    useEffect(() => {
        if (!data) {
            dispatch({ type: GET_ALL_ASSIGNMENT_REQUEST })
            getAllAssignment(dispatch, toast)
        }
    }, [])

    const { path} = useRouteMatch()
    return (
                    <Box>
            <TableHeader className='header__main' headerText={'Assignments'} Icon={RiFileCopy2Fill}>
                <div className='assignment__configure'>
                    <Button Icon={FiEdit} style={{background : '#dc3545', marginRight : '1rem'}} onClick={()=> history.push(`${path}/create`)}>Create</Button>
                </div>
            </TableHeader>
            {!data?.length ?
                <div className="empty_data_text">Sorry! No assignment data available!</div>
                    :
                <Table data={TEACHER_DATA({ dispatch, data, toast, history })} columns={COLUMNS} />}
            {isLoading && <Loader/>}
        </Box>
    )
}

export default Assignment
