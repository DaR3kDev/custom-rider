import { create } from 'zustand'
import {
  type SortingState,
  type ColumnFiltersState,
  type VisibilityState,
  type PaginationState,
  type RowSelectionState,
} from '@tanstack/react-table'

interface DataTableState {
  sorting: SortingState
  setSorting: (updaterOrValue: SortingState | ((old: SortingState) => SortingState)) => void

  columnFilters: ColumnFiltersState
  setColumnFilters: (
    updaterOrValue: ColumnFiltersState | ((old: ColumnFiltersState) => ColumnFiltersState),
  ) => void

  columnVisibility: VisibilityState
  setColumnVisibility: (
    updaterOrValue: VisibilityState | ((old: VisibilityState) => VisibilityState),
  ) => void

  pagination: PaginationState
  setPagination: (
    updaterOrValue: PaginationState | ((old: PaginationState) => PaginationState),
  ) => void

  rowSelection: RowSelectionState
  setRowSelection: (
    updaterOrValue: RowSelectionState | ((old: RowSelectionState) => RowSelectionState),
  ) => void
}

export const useDataTableStore = create<DataTableState>(set => ({
  sorting: [],
  setSorting: updaterOrValue =>
    set(state => ({
      sorting:
        typeof updaterOrValue === 'function'
          ? (updaterOrValue as any)(state.sorting)
          : updaterOrValue,
    })),

  columnFilters: [],
  setColumnFilters: updaterOrValue =>
    set(state => ({
      columnFilters:
        typeof updaterOrValue === 'function'
          ? (updaterOrValue as any)(state.columnFilters)
          : updaterOrValue,
    })),

  columnVisibility: {},
  setColumnVisibility: updaterOrValue =>
    set(state => ({
      columnVisibility:
        typeof updaterOrValue === 'function'
          ? (updaterOrValue as any)(state.columnVisibility)
          : updaterOrValue,
    })),

  pagination: { pageIndex: 0, pageSize: 10 },
  setPagination: updaterOrValue =>
    set(state => ({
      pagination:
        typeof updaterOrValue === 'function'
          ? (updaterOrValue as any)(state.pagination)
          : updaterOrValue,
    })),

  rowSelection: {},
  setRowSelection: updaterOrValue =>
    set(state => ({
      rowSelection:
        typeof updaterOrValue === 'function'
          ? (updaterOrValue as any)(state.rowSelection)
          : updaterOrValue,
    })),
}))
