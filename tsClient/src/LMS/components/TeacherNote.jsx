import React, { useContext, useEffect } from 'react'
import Box from './Box';
import Table from './Table';
import TableHeader from './TableHeader'
import { COLUMNS, NOTES_DATA} from '../helpers/Notes'
import {GoListOrdered} from 'react-icons/go'
import './TeacherNote.scss'
import { AppContext } from '../../AppContext';
import { getAllNote } from '../../action/actions';
import { toast } from 'react-toastify';
import { BiAddToQueue } from 'react-icons/bi'
import Button from '../components/Button'
import { GET_ALL_NOTES_REQUEST } from '../../action/actionType';
import Loader from '../components/Loader'

toast.configure();

function TeacherNote({showModalNote}) {
    const { dispatch, state: { notes: { data, isLoading } } } = useContext(AppContext)
        
    useEffect(() => {
        if (!data?.length) {
            dispatch({ type: GET_ALL_NOTES_REQUEST })
            getAllNote(dispatch, toast)
        }
    }, [])

    return (
        <div className="teacher__container">
            <Box>
                <TableHeader Icon={GoListOrdered} headerText="Teacher Notes">
                    <Button  onClick={()=>showModalNote(true)} style={{background: '#28a745' }} Icon={BiAddToQueue}>Add Note</Button>
                </TableHeader>
                {!data?.length ? <div className="empty_data_text">Sorry! No notes data available!</div>
                    : <Table columns={COLUMNS} data={NOTES_DATA({ dispatch, toast, data })} />}
                {isLoading && <Loader/>}
            </Box>
        </div>
    )
}

export default TeacherNote
