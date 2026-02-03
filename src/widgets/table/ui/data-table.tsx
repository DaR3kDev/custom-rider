import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  type CellContext,
  getFilteredRowModel,
} from '@tanstack/react-table'
import { useDataTableStore } from '../store/dataTableStore'
import { DataTableToolbar } from './data-table-toolbar'
import { DataTableTable } from './data-table-table'
import { DataTablePagination } from './data-table-pagination'
import { DataTableActions } from './data-table-actions'
import { type DataTableProps } from '../types/data-table.types'
import { DataTableTabs } from './data-table-tabs'
import { useState } from 'react'

export function DataTable<T extends { id: string | number }>(props: DataTableProps<T>) {
  const store = useDataTableStore()
  const [activeTab, setActiveTab] = useState(props.tabs?.defaultValue ?? '')
  const columns = props.actions
    ? [
        ...props.columns,
        {
          id: 'actions',
          cell: ({ row }: CellContext<T, unknown>) => (
            <DataTableActions row={row} actions={props.actions!} />
          ),
        },
      ]
    : props.columns

  const table = useReactTable({
    data: props.data,
    columns,
    state: {
      sorting: store.sorting,
      columnFilters: store.columnFilters,
      columnVisibility: store.columnVisibility,
      pagination: store.pagination,
      rowSelection: store.rowSelection,
    },
    onSortingChange: store.setSorting,
    onColumnFiltersChange: store.setColumnFilters,
    onPaginationChange: store.setPagination,
    onRowSelectionChange: store.setRowSelection,
    getRowId: row => row.id.toString(),
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  const handleTabChange = (value: string) => {
    setActiveTab(value)

    if (!props.tabs) return

    const column = table.getColumn(props.tabs.column as string)
    if (!column) return

    column.setFilterValue(value === props.tabs.defaultValue ? undefined : value)
    console.log(store.columnFilters)
  }

  return (
    <div className="space-y-4">
      {props.tabs && (
        <DataTableTabs tabs={props.tabs.items} value={activeTab} onChange={handleTabChange} />
      )}
      <DataTableToolbar search={props.search} addButton={props.addButton} />
      <DataTableTable table={table} />
      <DataTablePagination table={table} />
    </div>
  )
}
