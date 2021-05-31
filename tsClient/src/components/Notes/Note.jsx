import React from 'react'
import AddNote from '../Notes/AddNote'
import TeacherNote from '../Notes/TeacherNote'
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
