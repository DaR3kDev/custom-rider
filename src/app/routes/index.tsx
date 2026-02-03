import { Routes, Route } from 'react-router'
import LoginPage from '@/pages/authentication/login-page'
import DashboardLayout from '@/app/layout/dashboard-layout'
import UserPage from '@/pages/person/users/user-page'
import DashboardPage from '@/pages/dashboard/dashboard-page'

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="people/users" element={<UserPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
