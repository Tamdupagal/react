import Button from '../components/Button'
import {RiDeleteBin5Fill} from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'
import { deleteNote } from '../action/actions'

const style = {
    display: "inline-flex",
}

const handleDeleteNote = ({dispatch, id, toast}) => {
    if(!id) return
    deleteNote(dispatch, id, toast);
}
const handleUpdateNote = (data) => {
    console.log(data)
}

export const COLUMNS = [
    {
        Header: 'Title',
        accessor: 'title',
    },
    {
        Header: 'Saved Notes',
        accessor: 'description',
    },
    
    {
        Header: 'Date',
        accessor: 'date',
    },
    {
        Header: 'Time',
        accessor: 'time',
    },
    {
        Header: 'Action',
        accessor: 'action',
        Cell: props => {
            return (
                <div style={style}>
                    <Button onClick={()=> handleDeleteNote(props.value)} style={{marginRight: '0.7rem', backgroundColor: "#db504a"}} Icon={RiDeleteBin5Fill}/>
                    <Button style={{backgroundColor : '#696ffb'} } onClick={()=> handleUpdateNote(props.value)} Icon={FiEdit}>Edit</Button>
                </div>
            )
        }
    },
]

export const NOTES_DATA = ({dispatch, toast , notes}) => {
    if (!notes) return
    return notes.map(item => ({
        title: item.title,
        description: item.description,
        date: new Date(item.createdAt).toLocaleString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }),
        time: new Date(item.createdAt).toLocaleString('en-US', { timeStyle: 'short' }),
        action : {id : item._id, teacherId : item.teacher_id, title: item.title, description: item.description, toast, dispatch}
    }))
} 