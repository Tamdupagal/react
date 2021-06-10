import React, { useContext } from 'react'
import Editor from './Editor'
import Button from './Button'
import Box from './Box'
import TableHeader from './TableHeader'
import './CreateAs.scss';
import { AppContext } from '../AppContext'

function CreateAs() {
    const {theme} = useContext(AppContext)
    return (
        <Box>
            <TableHeader className='header__main' headerText={'Create Assignments'}/>
            <div className={`assignment__input__container${theme ? " dark" : ""}`}>
                <div className='assignment__input__box'>
                    <h2 className='assignment__title'>Assignments Title :</h2>
                    <input className='assignment__input' type="text" />
                </div>
                <div className='assignment__input__box'>
                    <h2 className='assignment__title'>Assignments For :</h2>
                    <input className='assignment__input' type="text" />
                </div>
                <div className='assignment__input__box'>
                    <h2 className='assignment__title'>Assignments Instructions :</h2>
                    <Editor withoutButton withoutTitle styles={{padding: 0}}/>
                </div>
                <div className='assignment__input__box'>
                    <h2 className='assignment__title'>Assignments File :</h2>
                    <div className='assignment__input'>
                        <input type="file"/>
                    </div>
                </div>
                <div className='assignment__input__box'>
                    <h2 className='assignment__title'>Assignments Last Submission date :</h2>
                    <input className='assignment__input' type="date" />
                </div>
                <Button>Create Assignment</Button>
            </div>
        </Box>
    )
}

export default CreateAs
