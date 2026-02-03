import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/shared/ui/table'
import { flexRender, type Table as ReactTable } from '@tanstack/react-table'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'

interface DataTableTableProps<T> {
  table: ReactTable<T>
}

export function DataTableTable<T>({ table }: DataTableTableProps<T>) {
  return (
    <div className="rounded-lg border overflow-hidden">
      <Table>
        <TableHeader className="bg-muted/40">
          {table.getHeaderGroups().map(group => (
            <TableRow key={group.id}>
              {group.headers.map(header => {
                const sorted = header.column.getIsSorted()

                return (
                  <TableHead
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="px-4 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-1">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {sorted === 'asc' && <IconChevronUp size={16} />}
                      {sorted === 'desc' && <IconChevronDown size={16} />}
                    </div>
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows.map(row => (
            <TableRow key={row.id} className="hover:bg-muted/50">
              {row.getVisibleCells().map(cell => (
                <TableCell key={cell.id} className="px-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
