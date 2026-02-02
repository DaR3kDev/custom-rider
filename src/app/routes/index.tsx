import { Routes, Route } from 'react-router'
import LoginPage from '@/pages/authentication/login-page'
import DashboardLayout from '@/app/layout/dashboard-layout'

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<LoginPage />} />
        <Route path="dashboard" element={<DashboardLayout />} />
      </Route>
    </Routes>
  )
}
