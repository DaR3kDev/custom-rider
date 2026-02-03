import { Badge } from '@/shared/ui/badge'
import { ChartAreaInteractive } from '@/widgets/chart/ui/chart-area-interactive'
import { ChartBarHorizontal } from '@/widgets/chart/ui/chart-bar-horizontal'
import { ChartLineMultiple } from '@/widgets/chart/ui/chart-line-multiple'
import { ChartPieSimple } from '@/widgets/chart/ui/chart-pie-simple'
import { StatsCard } from '@/widgets/stats/ui/stats-card'
import { DataTable } from '@/widgets/table/ui/data-table'
import { IconTrendingDown } from '@tabler/icons-react'
import type { ColumnDef } from '@tanstack/react-table'

interface Product {
  id: number
  product: string
  price: string
}

export default function DashboardPage() {
  const stats = [
    {
      label: 'New Customers',
      value: '1,234',
      badge: (
        <Badge variant="outline">
          <IconTrendingDown /> -20%
        </Badge>
      ),
      title: 'Down 20% this period',
      subtitle: 'Acquisition needs attention',
    },
    {
      label: 'Revenue',
      value: '$12,345',
      badge: (
        <Badge variant="outline">
          <IconTrendingDown /> -10%
        </Badge>
      ),
      title: 'Down 10% this period',
      subtitle: 'Revenue slightly decreased',
    },
    {
      label: 'Orders',
      value: '432',
      badge: (
        <Badge variant="outline">
          <IconTrendingDown /> -5%
        </Badge>
      ),
      title: 'Down 5% this period',
      subtitle: 'Orders are stable',
    },
  ]

  const data: Product[] = [
    { id: 1, product: 'Wireless Mouse', price: '$29.99' },
    { id: 2, product: 'Mechanical Keyboard', price: '$129.99' },
    { id: 3, product: 'USB-C Hub', price: '$49.99' },
    { id: 4, product: 'USB-C Hub', price: '$49.99' },
    { id: 5, product: 'USB-C Hub', price: '$49.99' },
    { id: 6, product: 'USB-C Hub', price: '$49.99' },
    { id: 7, product: 'USB-C Hub', price: '$49.99' },
    { id: 8, product: 'USB-C Hub', price: '$49.99' },
    { id: 9, product: 'USB-C Hub', price: '$49.99' },
    { id: 10, product: 'USB-C Hub', price: '$49.99' },
    { id: 11, product: 'USB-C Hub', price: '$49.99' },
    { id: 12, product: 'USB-C Hub', price: '$49.99' },
    { id: 13, product: 'USB-C Hub', price: '$49.99' },
    { id: 14, product: 'USB-C Hub', price: '$49.99' },
    { id: 15, product: 'USB-C Hub', price: '$49.99' },
  ]

  const columns: ColumnDef<Product>[] = [
    { accessorKey: 'product', header: 'Producto' },
    { accessorKey: 'price', header: 'Precio' },
  ]

  return (
    <div className="flex flex-col gap-6 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            label={stat.label}
            value={stat.value}
            badge={stat.badge}
            title={stat.title}
            subtitle={stat.subtitle}
          />
        ))}
      </div>

      {/* Gráfico principal */}
      <div className="w-full">
        <ChartAreaInteractive />
      </div>

      {/* Otros gráficos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ChartBarHorizontal />
        <ChartPieSimple />
        <ChartLineMultiple />
      </div>

      <div className="w-full">
        <DataTable search={true} data={data} columns={columns} />
      </div>
    </div>
  )
}
