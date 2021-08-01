import React from 'react'
import TableHeader from './TableHeader';
import Table from './Table';
import { COLUMNS } from '../helpers/Score'
import Box from './Box'
import {FaTrophy} from 'react-icons/fa'
import './Board.scss'

function Board() {
    return (
        <Box>
            <TableHeader headerText="Score Board" Icon={FaTrophy}/>
            <Table columns={COLUMNS}/>
        </Box>
    )
}

export default Board
