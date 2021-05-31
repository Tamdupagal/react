import React from 'react'
import Editor from '../Editor/Editor'
import Button from '../Button/Button'
import './CreateAs.scss';

function CreateAs() {
    return (
        <section>
            <div className='header__main'>
                <span>Create Assignments</span> 
            </div>
            <div className='assignment__input__container'>
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
        </section>
    )
}

export default CreateAs
