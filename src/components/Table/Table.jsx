import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import mock_data from '../../MOCK_DATA.json'
import './Table.scss'


function Table({columns, data}) {
    const col = useMemo(() => columns, []);
    const dataMock = useMemo(() => mock_data, []);
    const {
        headerGroups,
        rows,
        getTableBodyProps,
        getTableProps,
        prepareRow } = useTable({
            columns: col,
            data: dataMock
  })
    return (
        <div className="table__wrapper">
    <table {...getTableProps()}>
        <thead> 
          {
            headerGroups.map((headerGroup =>
            {
              return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  headerGroup.headers.map(column =>
                  {
                    return (
                    <th {...column.getHeaderProps()}>
                      {
                        column.render('Header')
                      }
                      </th>
                    )
                  })
                }
                </tr>
              )
            }))
            }
        </thead> 
        <tbody {...getTableBodyProps()}>
          {
            rows.map(row =>
            {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {
                    row.cells.map(cell =>
                    {
                      return (
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      )
                    })
                  }
                </tr>
              )
            })
          } 
          <tr>
            <td>

            </td>
          </tr>
        </tbody>
            </table>
        </div>
    )
}

export default Table
