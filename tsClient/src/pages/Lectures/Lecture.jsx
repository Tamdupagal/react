import React, { useContext, useEffect } from 'react'
import TableHeader from '../../components/TableHeader';
import Box from '../../components/Box';
import { FaBookReader } from 'react-icons/fa'
import { COLUMNS, LECTURE_DATA} from '../../helpers/Lecture'
import Loader from '../../components/Loader'
import Table from '../../components/Table'
import {toast} from 'react-toastify'
import { getAllLecture } from '../../action/actions';
import { AppContext } from '../../AppContext';
import './Lecture.scss'

function Lecture() {

    const { dispatch, state: { lecture } } = useContext(AppContext)
    
    useEffect(() => {
        getAllLecture(dispatch, toast)
    }, [])

    return (
        <Box>
            <TableHeader headerText={"Lectures"} Icon={FaBookReader} />
            <Table columns={COLUMNS} data={LECTURE_DATA(lecture.data)} />
            {lecture.isLoading && <Loader />}
        </Box>
    )
}

export default Lecture
