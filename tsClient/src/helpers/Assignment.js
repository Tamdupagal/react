import Button from '../components/Button'
import {RiDeleteBin5Fill} from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'
import { deleteAssignment } from '../action/actions'


const style = {
    display: "inline-flex",
}

const handleDeleteAssignment = ({ dispatch, assignment_id, toast }) => {
    if(!assignment_id) return
    deleteAssignment(dispatch, assignment_id, toast)
}

const handleUpdateAssignment = ({instruction, description, deadline, assignment_id, history}) => {
    history.push({
        pathname: '/teacher/assignment/update',
        state: {
            instruction,
            description,
            deadline,
            assignment_id
        }
    })
}

export const COLUMNS = [
    {
        Header: 'Assignment',
        accessor : 'assignment' 
    },
    {
        Header: 'Instructions',
        accessor : 'instruction'
    },
    {
        Header: 'Submission Date',
        accessor : 'date'
    },
    {
        Header: 'Action',
        accessor: 'action',
        Cell: props => {
            return (
                <div style={style}>
                    <Button onClick={()=> handleDeleteAssignment(props.value)} style={{marginRight: '0.7rem', backgroundColor: "#db504a"}} Icon={RiDeleteBin5Fill}/>
                    <Button style={{backgroundColor : '#696ffb'} } onClick={()=> handleUpdateAssignment(props.value)} Icon={FiEdit}>Edit</Button>
                </div>
            )
        }
    },
]

export const TEACHER_DATA = ({dispatch, toast, data,history}) => {
    if(!data) return
    return (
        data.map(item => ({
            assignment: item.description,
            instruction : item.instructions,
            date: new Date(item.last_submission_date).toLocaleString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }),
            action: {
                assignment_id: item._id,
                course_id: item.course_id,
                teacher_id: item.teacher_id,
                instruction: item.instructions,
                description: item.description,
                deadline: item.last_submission_date,
                dispatch,
                toast,
                history
            }
        }))
    )
}


export const STD_COLUMNS = [
    {
        Header: 'Assignment',
        accessor : 'first_name' 
    },
    {
        Header: 'Notes',
        accessor : 'last_name' 
    },
    
    {
        Header: 'Submission Date',
        accessor : 'email' 
    },
    {
        Header: 'Status',
        accessor : 'gender' 
    },
    {
        Header : 'Action'
    },
]