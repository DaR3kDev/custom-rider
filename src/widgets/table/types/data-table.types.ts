import { type ReactNode } from 'react'
import { type ColumnDef, type Table } from '@tanstack/react-table'

export interface DataTableProps<T> {
  data: T[]
  columns: ColumnDef<T>[]

  search?: boolean

  addButton?: {
    label: string
    onClick: () => void
  }

  actions?: (row: T) => ReactNode

  tabs?: {
    defaultValue: string
    column: keyof T
    items: DataTableTab[]
  }
}

export interface DataTableTab {
  value: string
  label: string
}
