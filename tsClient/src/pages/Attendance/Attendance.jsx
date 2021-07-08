import React, { useContext, useEffect } from 'react'
import './Attendance.scss'
import { COLUMNS } from '../../helpers/Attendance'
import Table from '../../components/Table'
import Box from '../../components/Box'
import TableHeader from '../../components/TableHeader'
import { BsPeopleFill} from 'react-icons/bs'
import { AppContext } from '../../AppContext'
import { getAllLecture } from '../../action/actions'
import { toast } from 'react-toastify'
import Loader from '../../components/Loader'

toast.configure()


function Attendance() {

    const { dispatch, state: { lecture } } = useContext(AppContext)
    
    // useEffect(() => {
    //     getAllLecture(dispatch, toast)
    // }, [])
    
    
    return (
        <Box>
            <TableHeader headerText={'Attendances'} Icon={BsPeopleFill}/>
            <Table columns={COLUMNS} />
            {lecture.isLoading && <Loader/>}
        </Box>
    )
}

export default Attendance
