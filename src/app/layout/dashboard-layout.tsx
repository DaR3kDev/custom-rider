import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/shared/ui/breadcrumb'
import { Separator } from '@/shared/ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/shared/ui/sidebar'
import { AppSidebar } from '@/widgets/sidebar/ui/app-sidebar'
import { Outlet, useLocation } from 'react-router'

export default function DashboardLayout() {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter(Boolean)
  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                {pathnames.map((name: string, index: number) => {
                  const href = '/' + pathnames.slice(0, index + 1).join('/')
                  const isLast = index === pathnames.length - 1
                  return (
                    <BreadcrumbItem key={index}>
                      {isLast ? (
                        <BreadcrumbPage>{capitalize(name)}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink href={href}>{capitalize(name)}</BreadcrumbLink>
                      )}
                      {!isLast && <BreadcrumbSeparator className="hidden md:block" />}
                    </BreadcrumbItem>
                  )
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
