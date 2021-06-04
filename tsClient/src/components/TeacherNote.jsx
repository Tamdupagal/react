import React from 'react'
import Box from './Box';
import Table from './Table';
import TableHeader from './TableHeader'
import edit from '../assets/edit.svg'
import {COLUMNS} from '../helpers/Notes'
import './TeacherNote.scss'

function TeacherNote() {
    return (
        <div className="teacher__container">
        <Box>
            <TableHeader headerText="Teacher Notes" headerImg={edit} invertImg/>
            <Table columns={COLUMNS}/>
            </Box>
        </div>
    )
}

export default TeacherNote
