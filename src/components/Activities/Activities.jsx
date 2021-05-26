import React from 'react'
import './Activities.scss';
import Editor from '../Editor/Editor'
import TableHeader from '../TableHeader/TableHeader' 
import brain from '../../images/brain.svg'

function Activities() {
    return (
        <section className="activity__section">
            <TableHeader headerText="Add Course Activity" headerImg={brain} />
            <Editor />
        </section>
    )
}

export default Activities
