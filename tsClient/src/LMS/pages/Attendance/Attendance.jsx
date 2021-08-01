import React, { useContext, useEffect, useRef, useState } from 'react'
import { COLUMNS } from '../../helpers/Attendance'
import Table from '../../components/Table'
import Box from '../../components/Box'
import TableHeader from '../../components/TableHeader'
import { BsPeopleFill} from 'react-icons/bs'
import { AppContext } from '../../../AppContext'
import { toast } from 'react-toastify'
import Loader from '../../components/Loader'
import {FaPlus, FaMinus, FaCheckCircle, FaUserEdit, FaTimes} from 'react-icons/fa'
import { getClassrooms } from '../../../action/actions'
import Button from '../../components/Button'
import './Attendance.scss'
toast.configure()


function Attendance() {

    const { dispatch, state: { classroom } } = useContext(AppContext)

    // const [isActive, setIsActive] = useState({})

    const isActiveRef = useRef({})
    const [isActive, setIsActive] = useState({})

    const boxRef = useRef({})

    const handleAccordian = (id, students) => {
        const heightOffset = 6
        const length = students ? Object.keys(students).length : 1
        isActiveRef.current[id] = isActiveRef.current[id] ? !isActiveRef.current[id] : true;
        setIsActive(prev => ({ ...prev, [id]: isActiveRef.current[id]}))
        if (isActiveRef.current[id]) {
            boxRef.current[id].style.height = `${length * heightOffset}rem`
        } else {
            boxRef.current[id].style.height = 0;
        }
        // setIsActive(prev=> ({...prev, [id] : prev[id] ? !prev[id] : true}))
    }

    
    useEffect(() => {
        getClassrooms(dispatch, toast)
    }, [])

    
    return (
        <Box>
            <TableHeader headerText={'Attendances'} Icon={BsPeopleFill}/>
            {/* <Table columns={COLUMNS} /> */}
            <div className="accordion__container">
            {classroom?.data?.map((item, index) => {
                return (
                <div key={index} className="accordion">
                    <h1 onClick={() => handleAccordian(item._id, item?.enrolled_students)} ><span>{item.name}</span> {isActive[item._id]? <FaMinus className="accordion__icon" /> : <FaPlus className="accordion__icon" />}</h1>
                        <div className="accordion__box" ref={(r) => {
                            boxRef.current[item._id] = r;
                    } }>
                            {!item.enrolled_students ?
                                <p className="no__data__class">There are no students in this class!</p>
                             : Object.keys(item.enrolled_students).map((student, index) => {
                            return (
                                <p key={index} className="accordion__data"><span>{student}</span>
                                    <span style={{ display: 'flex' }}>
                                        <Button Icon={FaCheckCircle} style={{ marginRight: "0.7rem" , backgroundColor: 'purple'}} />
                                        <Button Icon={FaUserEdit} />
                                    </span></p>
                            )
                        })}
                    </div>
                </div>
                )
            })}
            </div>
            {classroom.isLoading && <Loader/>}
        </Box>
    )
}

export default Attendance
