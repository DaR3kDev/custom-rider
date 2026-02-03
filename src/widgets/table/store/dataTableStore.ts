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

/**
 * Función genérica para crear setters de Zustand sin usar `any`.
 * @param stateKey - Clave del estado a actualizar
 * @returns Función setter para esa propiedad
 */
const createSetter =
  <K extends keyof DataTableState>(stateKey: K) =>
  (
    set: (
      partial: Partial<DataTableState> | ((state: DataTableState) => Partial<DataTableState>),
    ) => void,
  ) =>
  (updaterOrValue: DataTableState[K] | ((old: DataTableState[K]) => DataTableState[K])) => {
    set(state => ({
      [stateKey]:
        typeof updaterOrValue === 'function'
          ? (updaterOrValue as (old: DataTableState[K]) => DataTableState[K])(state[stateKey])
          : updaterOrValue,
    }))
  }

/**
 * Store de Zustand para manejar el estado de la tabla.
 */
export const useDataTableStore = create<DataTableState>(set => ({
  sorting: [],
  setSorting: createSetter('sorting')(set),

  columnFilters: [],
  setColumnFilters: createSetter('columnFilters')(set),

  columnVisibility: {},
  setColumnVisibility: createSetter('columnVisibility')(set),

  pagination: { pageIndex: 0, pageSize: 10 },
  setPagination: createSetter('pagination')(set),

  rowSelection: {},
  setRowSelection: createSetter('rowSelection')(set),
}))
