import { BrowserRouter } from 'react-router'
import MainRoutes from '@/app/routes'

export default function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  )
}
