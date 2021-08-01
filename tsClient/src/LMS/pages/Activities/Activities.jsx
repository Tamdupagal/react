import React, { useContext, useState } from 'react'
import './Activities.scss';
import Editor from '../../components/Editor'
import TableHeader from '../../components/TableHeader'
import Box from '../../components/Box'
import Button from '../../components/Button'
import {toast } from 'react-toastify';
import Loader from '../../components/Loader'
import {FaLightbulb} from'react-icons/fa'
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from '../../../AppContext';

toast.configure()

function Activities() {

    const {dispatch, state:{courseActivity}} = useContext(AppContext)

    const [editor, setEditor] = useState({
        text: '',
        value: ''
    })

    const handleEditor = (content, delta, source, editor) => {
        setEditor(prev=> ({...prev, text: editor.getText(content), value: content}))
    }

    const addActivity = (e) => {
        const postDataObj = {

        }
        console.log(postDataObj)
    }
    return (
        <Box cls="activity__section">
            <TableHeader headerText="Add Course Activity" Icon={FaLightbulb} />
            <Editor withoutButton value={editor.value} onChange={handleEditor} />
            {courseActivity.isLoading ?
                <Loader />
                        :
                <Button onClick={addActivity} Icon={FaLightbulb}>Add activity</Button>
                }
        </Box>
    )
}

export default Activities
