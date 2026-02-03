import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card'
import type { ReactNode } from 'react'

interface StatsCardProps {
  label: string
  value: string | number
  badge: ReactNode
  title: string
  subtitle: string
}

export function StatsCard({ label, value, badge, title, subtitle }: StatsCardProps) {
  return (
    <Card className="w-full bg-gradient-to-t from-primary/5 to-card dark:bg-card rounded-lg p-4 shadow-sm">
      <CardHeader className="flex flex-col gap-1">
        <CardDescription className="text-sm">{label}</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums">{value}</CardTitle>
        <CardAction>{badge}</CardAction>
      </CardHeader>
      <CardFooter className="flex flex-col gap-1 text-xs sm:text-sm mt-2">
        <div className="line-clamp-1 font-medium">{title}</div>
        <div className="text-muted-foreground">{subtitle}</div>
      </CardFooter>
    </Card>
  )
}
