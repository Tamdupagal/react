import React from 'react'
import Box from '../Box/Box';
import Table from '../Table/Table';
import TableHeader from '../TableHeader/TableHeader'
import edit from '../../images/edit.svg'
import {COLUMNS} from '../table_data/Notes'
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
