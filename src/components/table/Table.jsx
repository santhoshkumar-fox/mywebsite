import React, { useMemo, useState } from 'react'
import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel, getSortedRowModel, getFilteredRowModel } from "@tanstack/react-table"
import mdata from "../../MOCK_DATA.json"
import "./Table.css"
function Table({filtering,steFiltering,columns}) {

    // {
    //     "id": 1,
    //     "first_name": "Isador",
    //     "last_name": "Kruger",
    //     "email": "ikruger0@huffingtonpost.com",
    //     "gender": "Male",
    //     "dob": "2023-04-28T11:19:35Z"
    //   },



    const [sorting, setSorting] = useState([]);
    const data = useMemo(() => mdata, [])
    const table = useReactTable(
        { 
            data, 
            columns, 
            getCoreRowModel: getCoreRowModel(), 
            // getPaginationRowModel: getPaginationRowModel(),
            getSortedRowModel:getSortedRowModel(),
            getFilteredRowModel:getFilteredRowModel(),
            state:{
                sorting:sorting,
                globalFilter:filtering
            },
            onSortingChange:setSorting,
            onGlobalFilterChange:steFiltering
          
        });
    return (
        <div className="tableContainer">
            <input className='searchContainer' type="text" value={filtering} onChange={(e)=>{steFiltering(e.target.value)}}/>
            <table>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => {
                        return (

                            <tr className='headContainer' key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    // console.log("🩻",header.column.getIsSorted())
                                    return(
                                        <th onClick={header.column.getToggleSortingHandler()} key={header.id}>
                                            
                                                {
                                                    flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )
                                                }
                                                {
                                                    {asc:<i className="uil uil-angle-double-up sortIcon sortUp" ></i>,desc:<i className="uil uil-angle-double-down sortIcon sortDown"></i>,normal:<i className="uil uil-direction sortIcon"></i>}[ (header.column.getIsSorted()) ? header.column.getIsSorted() : 'normal']
                                                }
                                            
                                        </th>
                                    )
                                })}
                            </tr>
                        )
                    }
                    )}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {
                                row.getVisibleCells().map((cell) => {
                                    let colorstyle = ""
                                    if(cell.column.columnDef.accessorKey == "change" || cell.column.columnDef.accessorKey == "pChange"){
                                        colorstyle = (cell.getValue() > 0 ? "greenText" : "redText")
                                    }
                                    return (<th key={cell.id}>
                                        <p className={colorstyle} >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </p>

                                    </th>)
                                })
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <button onClick={() => { table.setPageIndex(0) }}>First Page</button>
            <button disabled={!table.getCanPreviousPage()} onClick={() => { table.previousPage() }}>Previous Page</button>
            <button disabled={!table.getCanNextPage()} onClick={() => { table.nextPage() }}>Next Page</button>
            <button onClick={() => { table.setPageIndex(table.getPageCount() - 1) }}>Last Page</button> */}
        </div>
    )
}

export default Table
