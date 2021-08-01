import React, { useState } from 'react'
import AddNote from '../../components/AddNote'
import TeacherNote from '../../components/TeacherNote'
import Modal from 'react-modal';
import './Note.scss';



Modal.setAppElement('#root');

function Note() {
    
    const [modalNote, showModalNote] = useState(false)
    
    return (
        <div className="notes__section">
            <Modal
                isOpen={modalNote}
                onRequestClose={()=> showModalNote(false)}
                contentLabel="Example Modal"
                overlayClassName={{base : 'overlay', afterOpen : 'overlay_after_open', beforeClose : 'overlay_before_close'}}
                className={{base : 'content', afterOpen : 'content_after_open', beforeClose : 'content_before_close'}}
                closeTimeoutMS={300}
            >
                <AddNote showModalNote={showModalNote}/>
            </Modal>
            <TeacherNote showModalNote={showModalNote}/>
        </div>
    )
}

export default Note
