import React from 'react'
import './Activities.scss';
import Editor from '../../components/Editor'
import TableHeader from '../../components/TableHeader'
import brain from '../../assets/brain.svg'
import Box from '../../components/Box'

function Activities() {
    return (
        <Box cls="activity__section">
            <TableHeader headerText="Add Course Activity" headerImg={brain} />
            <Editor/>
        </Box>
    )
}

export default Activities
