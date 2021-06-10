import React from 'react'
import TableHeader from './TableHeader';
import Table from './Table';
import { COLUMNS } from '../helpers/Score'
import Box from './Box'
import trophy from '../assets/trophy.svg'
import './Board.scss'

function Board() {
    return (
        <Box>
            <TableHeader headerText="Score Board" headerImg={trophy}/>
            <Table columns={COLUMNS}/>
        </Box>
    )
}

export default Board
