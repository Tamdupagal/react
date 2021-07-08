import React, { useContext, useEffect, useState } from 'react'
import Editor from './Editor'
import Button from './Button'
import Box from './Box'
import TableHeader from './TableHeader'
import './CreateAs.scss';
import { AppContext } from '../AppContext'
import Select from 'react-select'
import {customStyles} from '../helpers/ReactSelect'
import { getallCourses, postNewAssignment, updateAssignment } from '../action/actions'
import {toast } from 'react-toastify';
import Loader from '../components/Loader'
import {ImPencil} from 'react-icons/im'
import {FaPencilRuler} from 'react-icons/fa'
import { ImCloudUpload } from 'react-icons/im'
import {useRouteMatch, useHistory}  from 'react-router-dom'
import DatePicker from '../components/DatePicker'


toast.configure()


function CreateAs() {
    const { path} = useRouteMatch()
    const history = useHistory()
    const { theme, dispatch, state: { auth, course, assignment} } = useContext(AppContext);
    const [selectedOption, setselectedOption] = useState();
    const [title, setTitle] = useState("");
    const [editorText, setEditorText] = useState({
        text: "",
        value: "",
    });
    const [dateText, setdateText] = useState(new Date());
    const getOptions = (courses) => {
        if(!courses) return
        return courses.map(course => ({value: course._id, label: course.title}));
    }

    const createPostData = () => {

        const postDataObj = {
            instructions: editorText.text,
            description: title,
            last_submission_date: dateText,
            teacher_id : auth.id(auth.token),
            course_id : selectedOption.value
            
        }
        if (path.includes('update')) {
            postDataObj.teacher_id = history.location.state.teacher_id
            postDataObj.course_id = history.location.state.course_id
        }
        return postDataObj
    }
    

    const createAssignment = () => {
        console.log(createPostData())
        // postNewAssignment(dispatch, createPostData(), toast)
    }

    const assignmentUpdate = () => {
        updateAssignment(dispatch, createPostData(), history.location.state.assignment_id, toast)
    } 

    const handleSelect = (option) => {
        setselectedOption(option)
    }

    const handleEditorContent = (content,delta, source,  editor) => {
        setEditorText(prev=> ({...prev, text: editor.getText(content), value: content }))
    }

    useEffect(() => {
        if(path.includes('update')) return
        getallCourses(dispatch);
    }, [])

    return (
        <Box>
            <TableHeader className='header__main' headerText={path.includes('update') ? 'Update Assignment' : 'Create Assignment'} Icon={FaPencilRuler}/>
            <div className={`assignment__input__container${theme ? " dark" : ""}`}>
                <div className='assignment__input__box'>
                    <h2 className='assignment__title'>Assignment Title :</h2>
                    <input onChange={(e) => setTitle(e.target.value)} value={title} className='assignment__input' type="text" />
                </div>
                {!path.includes('update') && <div className='assignment__input__box'>
                    <h2 className='assignment__title'>Assignment For :</h2>
                    <Select isLoading={course.isLoading} options={getOptions(course.courses)} value={selectedOption} onChange={handleSelect}/>
                </div>}
                <div className='assignment__input__box'>
                    <h2 className='assignment__title'>Assignment Description :</h2>
                    <Editor withoutButton withoutTitle styles={{ padding: 0 }} value={editorText.value} onChange={handleEditorContent}/>
                </div>
                <div className='assignment__input__box'e style={{width: 'max-content'}}>
                    <h2 className='assignment__title'>Assignment File :</h2>
                    <div className='assignment__input'>
                        <input type="file"/>
                    </div>
                </div>
                <div className='assignment__input__box'>
                    <h2 className='assignment__title'>Assignment Last Submission date :</h2>
                    {/* <DatePicker
                        handleDayChange={(day)=>setdateText(day)}
                        selectedDate={dateText}
                    /> */}
                    <input type="date" value={dateText} onChange={(e)=>setdateText(e.target.value)}/>
                </div>
                    <div className="assignment__edit__btn">
                        {!path.includes('update') ? <Button Icon={ImPencil} style={{marginRight: '1.5rem'}} onClick={() => createAssignment(course.courses)}>Create</Button> : 
                        <Button Icon={ImCloudUpload} style={{ backgroundColor: '#007bff' }} onClick={assignmentUpdate}>Update</Button>}
                    </div>
                {assignment.isLoading && <Loader/> }
            </div>
        </Box>
    )
}

export default CreateAs
