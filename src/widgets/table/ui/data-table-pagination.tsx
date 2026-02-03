import { Button } from '@/shared/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select'
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
} from '@tabler/icons-react'
import { type Table } from '@tanstack/react-table'

const ROWS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

interface DataTablePaginationProps<T> {
  table: Table<T>
}

export function DataTablePagination<T>({ table }: DataTablePaginationProps<T>) {
  const showEdges = table.getPageCount() > 5

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3 border-t bg-muted/30">
      <Select
        value={`${table.getState().pagination.pageSize}`}
        onValueChange={v => table.setPageSize(Number(v))}
      >
        <SelectTrigger className="h-8 w-20">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {ROWS.map(v => (
            <SelectItem key={v} value={`${v}`}>
              {v}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <span className="text-sm text-muted-foreground">
        Página {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
      </span>

      <div className="flex gap-1">
        {showEdges && (
          <Button
            size="icon"
            variant="outline"
            aria-label="Primera página"
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.setPageIndex(0)}
          >
            <IconChevronsLeft size={16} />
          </Button>
        )}

        <Button
          size="icon"
          variant="outline"
          aria-label="Página anterior"
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          <IconChevronLeft size={16} />
        </Button>

        <Button
          size="icon"
          variant="outline"
          aria-label="Página siguiente"
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          <IconChevronRight size={16} />
        </Button>

        {showEdges && (
          <Button
            size="icon"
            variant="outline"
            aria-label="Última página"
            disabled={!table.getCanNextPage()}
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          >
            <IconChevronsRight size={16} />
          </Button>
        )}
      </div>
    </div>
  )
}
