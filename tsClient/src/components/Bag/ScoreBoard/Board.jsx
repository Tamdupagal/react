import React from 'react'
import TableHeader from '../../TableHeader/TableHeader';
import Table from '../../Table/Table';
import { COLUMNS } from '../../table_data/Score'
import Box from '../../Box/Box'
import trophy from '../../../images/trophy.svg'
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
