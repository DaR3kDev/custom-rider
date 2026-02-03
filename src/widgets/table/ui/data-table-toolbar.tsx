import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { IconPlus, IconSearch } from '@tabler/icons-react'

interface DataTableToolbarProps {
  search?: boolean
  addButton?: {
    label: string
    onClick: () => void
  }
}

export function DataTableToolbar({ search, addButton }: DataTableToolbarProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      {search && (
        <div className="relative w-full sm:max-w-sm">
          <IconSearch
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input placeholder="Buscar..." className="h-9 pl-9" />
        </div>
      )}

      {addButton && (
        <Button size="sm" className="h-9 gap-2" onClick={addButton.onClick}>
          <IconPlus size={16} />
          {addButton.label}
        </Button>
      )}
    </div>
  )
}
