import {
  LayoutDashboard,
  Users,
  Bike,
  Calendar,
  Wrench,
  Package,
  MapPin,
  Settings2,
} from 'lucide-react'
import type { SidebarItem } from './sidebar.types'

/**
 * Sidebar navigation configuration
 * - ADMIN: configuración y control del sistema
 * - EMPLOYEE: operación diaria
 */
export const SIDEBAR_ITEMS: SidebarItem[] = [
  /**
   * ======================
   * GENERAL
   * ======================
   */
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: LayoutDashboard,
  },

  /**
   * ======================
   * PERSONAS
   * ======================
   */
  {
    title: 'Personas',
    url: '/dashboard/people',
    icon: Users,
    roles: ['ADMIN'],
    items: [
      { title: 'Usuarios del sistema', url: '/dashboard/people/users' },
      { title: 'Clientes', url: '/dashboard/people/clients' },
    ],
  },

  /**
   * ======================
   * OPERACIÓN
   * ======================
   */
  {
    title: 'Motocicletas',
    url: '/motorcycles',
    icon: Bike,
    roles: ['ADMIN', 'EMPLOYEE'],
  },
  {
    title: 'Citas del taller',
    url: '/workshop',
    icon: Calendar,
    roles: ['ADMIN', 'EMPLOYEE'],
    items: [
      { title: 'Citas programadas', url: '/appointments' },
      { title: 'Agenda diaria', url: '/schedule' },
    ],
  },
  {
    title: 'Mantenimiento',
    url: '/maintenance',
    icon: Wrench,
    roles: ['ADMIN', 'EMPLOYEE'],
    items: [
      { title: 'Historial de mantenimiento', url: '/maintenance' },
      { title: 'Tipos de servicio', url: '/services' },
    ],
  },
  {
    title: 'Inventario',
    url: '/inventory',
    icon: Package,
    roles: ['ADMIN', 'EMPLOYEE'],
    items: [
      { title: 'Productos', url: '/products' },
      { title: 'Entradas y salidas', url: '/inventory/movements' },
    ],
  },

  /**
   * ======================
   * CONFIGURACIÓN
   * ======================
   */
  {
    title: 'Sedes',
    url: '/location',
    icon: MapPin,
    roles: ['ADMIN'],
  },
  {
    title: 'Configuración',
    url: '/settings',
    icon: Settings2,
    roles: ['ADMIN'],
    items: [
      { title: 'Roles y permisos', url: '/settings/roles' },
      { title: 'Categorías', url: '/settings/categories' },
      { title: 'Servicios del sistema', url: '/settings/services' },
    ],
  },
]
