import React, { useContext, useEffect } from 'react'
import TableHeader from '../../components/TableHeader'
import Table from '../../components/Table'
import Box from '../../components/Box'
import Loader from '../../components/Loader'
import { COLUMNS, LECTURE_DATA } from '../../helpers/Lecture';
import { FaBookReader } from 'react-icons/fa';
import { getAllLecture } from '../../../action/actions';
import { toast } from 'react-toastify';
import { AppContext } from '../../../AppContext';

import './Dashboard.scss';


function Dashboard() {
    const { dispatch, state: { lecture } } = useContext(AppContext)
    
    useEffect(() => {
        getAllLecture(dispatch, toast)
    }, [])

    return (
        <Box>
            <TableHeader headerText={"Lectures"} Icon={FaBookReader} />
            {!lecture?.data?.length ?
                <div className="empty_data_text">Sorry! No lecture data available</div>
                    :
                <Table columns={COLUMNS} data={LECTURE_DATA(lecture.data)} />}
            {lecture.isLoading && <Loader />}
        </Box>
    )
}

export default Dashboard
