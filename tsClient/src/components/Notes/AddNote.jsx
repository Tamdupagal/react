import React from 'react'
import Box from '../Box/Box'
import TableHeader from '../TableHeader/TableHeader'
import edit from '../../images/edit.svg'
import brain from '../../images/brain.svg'
import Button from '../Button/Button'
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
