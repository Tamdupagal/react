import React, { useContext, useMemo } from 'react'
import { useTable } from 'react-table'
import mock_data from '../MOCK_DATA.json'
import { context } from '../store/Context'
import './Table.scss'


function Table({ columns, data }) {
    const {theme} = useContext(context)
    const col = useMemo(() => columns, [columns]);
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
    <table {...getTableProps()} className={`${theme ? 'dark' : ''}`}>
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
