import React, { useContext, useEffect, useRef, useState } from 'react'
import Box from './Box'
import TableHeader from './TableHeader'
import Button from './Button'
import './AddNote.scss'
import { postNewNote } from '../../action/actions'
import { AppContext } from '../../AppContext'
import { toast } from 'react-toastify';
import Loader from '../components/Loader'
import {FiEdit} from 'react-icons/fi'
import {RiCloseCircleFill} from 'react-icons/ri'
import Notification from '../components/Notification'
import { BiBrain } from 'react-icons/bi'

import 'react-toastify/dist/ReactToastify.css';

toast.configure()

function AddNote({showModalNote}) {

    const { dispatch, state: { notes } } = useContext(AppContext)
    const [data, setData] = useState("")
    const [title, setTitle] = useState("")
    const wordCountRef = useRef(0)

    const handleNoteEditor = (e) => {
        wordCountRef.current = e.target.value ? e.target.value.length : 0
        if(wordCountRef.current >= 31) return
        setData(e.target.value)
    }
    const handleClear = (e) => {
        wordCountRef.current = 0
        setData("")
        setTitle("")
    }


    const submitNote = () => {
        if (!data || !title) {
            toast.warn(<Notification>Text fields cannot be empty!</Notification>, {
                style: {
                    backgroundColor: '#007bff',
                }
            })
            return
        }
        showModalNote(false)
        const dataObj = {
            title,
            teacher_id: "4edd40c86762e0fb12000003",
            description: data
        }



        postNewNote(dispatch, dataObj, toast)
    }




    return (
        <Box cls="note__add__box">
            <TableHeader headerText="Add a Note" Icon={BiBrain}>
                <Button onClick={() => showModalNote(false)} style={{ background: '#ff6f59' }} Icon={RiCloseCircleFill}/>
            </TableHeader>
            <div className="textArea__wrapper">
                <h2 className="notes__title">Titles:</h2>
                <input placeholder="Add any title..." className="title__input" type="text" value={title} onChange={(e)=> setTitle(e.target.value)} maxLength={20}/>
                <h2 className="notes__title">Add Content : <span className="wordcount">{wordCountRef.current }/30</span></h2>
                <textarea placeholder="Add Note here..." className="notes__textArea" value={data} onChange={handleNoteEditor}></textarea>
                <hr />
                <div className="note__config__btn">
                    <Button Icon={FiEdit} style={{ background: '#ff6f59', marginRight : '1rem' }} onClick={handleClear}>Clear</Button>
                    <Button Icon={FiEdit} style={{ background: '#007bff' }} onClick={submitNote}>Add Note</Button>
                </div>
                {notes.isLoading && <Loader/>}
            </div>
        </Box>
    )
}

export default AddNote
