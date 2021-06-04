import React from 'react'
import Box from './Box'
import TableHeader from './TableHeader'
import edit from '../assets/edit.svg'
import brain from '../assets/brain.svg'
import Button from './Button'
import './AddNote.scss'

const style = {
    background: '#007bff'
}
function AddNote() {
    
    return (
        <Box>
            <TableHeader headerText="Add a Note" headerImg={brain}/>
            <div className="textArea__wrapper">
                <h2 className="notes__title">Add Content :</h2>
                <textarea className="notes__textArea"></textarea>
                <hr />
            <Button img={edit} style={style}>Add Note</Button>
            </div>
        </Box>
    )
}

export default AddNote
