import React, { useContext, useMemo } from 'react'
import { useTable, usePagination} from 'react-table'
import { AppContext } from '../../AppContext'
import mock_data from '../../MOCK_DATA.json'
import {FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleRight, FaAngleLeft} from 'react-icons/fa'
import './Table.scss';


function Table({ columns, data }) {
    const {theme} = useContext(AppContext)
    const col = useMemo(() => columns, [columns]);
    const dataMock = useMemo(() => mock_data, []);
    const {
        headerGroups,
        getTableBodyProps,
        getTableProps,
      prepareRow,
      page,
      canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
    } = useTable({
            columns: col,
          data: data || dataMock,
          initialState: {
            pageSize: 5,
            pageIndex: 1
          }
    }, usePagination)
    return (
      <div className="table__wrapper">
        <div className="page__change__config">
          <span className="goto__page">
              | Go to page:{"   "}
              <input
              type="number"
              min={1}
              max={pageOptions.length}
                defaultValue={pageIndex + 1}
                onChange={e => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  gotoPage(page);
                }}
                style={{ width: "100px" }}
              />
            </span>{" "}
            <select
                  value={pageSize}
                  onChange={e => {
                    setPageSize(Number(e.target.value));
                  }}
                >
                  {[5, 10, 20, 30, 40, 50].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize}
                    </option>
                  ))}
            </select>
        </div>
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
              page.map(row =>
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
        </tbody>
        </table>
         <div className="pagination">
            <button className="pagination__btn" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              <FaAngleDoubleLeft/>
            </button>
            <button className="pagination__btn" onClick={() => previousPage()} disabled={!canPreviousPage}>
              <FaAngleLeft/>
            </button>
            <button className="pagination__btn" onClick={() => nextPage()} disabled={!canNextPage}>
              <FaAngleRight/>
            </button>
            <button className="pagination__btn" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
              <FaAngleDoubleRight/>
            </button>
            <span className="page">
              Page{"  "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </span>
      </div>
      </div>
      
    )
}

export default Table
