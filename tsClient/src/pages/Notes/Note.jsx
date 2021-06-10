import React from 'react'
import AddNote from '../../components/AddNote'
import TeacherNote from '../../components/TeacherNote'
import './Note.scss';

function Note() {
    return (
        <div className="notes__section">
            <TeacherNote/>
            <AddNote/>
        </div>
    )
}

export default Note
