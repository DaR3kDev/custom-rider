import { Tabs, TabsList, TabsTrigger } from '@/shared/ui/tabs'
import type { DataTableTab } from '../types/data-table.types'

interface DataTableTabsProps {
  value: string
  tabs: DataTableTab[]
  onChange?: (value: string) => void 
}

export function DataTableTabs({ value, tabs, onChange }: DataTableTabsProps) {
  if (!tabs.length) return null

  return (
    <Tabs value={value} onValueChange={onChange} className="w-full">
      <TabsList>
        {tabs.map(tab => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
