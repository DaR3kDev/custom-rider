import { Button } from '@/shared/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/shared/ui/dropdown-menu'
import { MoreHorizontal } from 'lucide-react'
import { type Row } from '@tanstack/react-table'
import { type ReactNode } from 'react'

interface DataTableActionsProps<T> {
  row: Row<T>
  actions: (row: T) => ReactNode
}

export function DataTableActions<T>({ row, actions }: DataTableActionsProps<T>) {
  return (
    <div className="flex justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal size={18} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">{actions(row.original)}</DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
