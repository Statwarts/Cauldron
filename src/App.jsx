import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import DashboardRoute from './pages/dashboard/dashboardRoute'
import Pricing from './pages/pricing/pricing'
import Register from './pages/register/register'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path= "/register" element={<Register />} />
          <Route path="dashboard/*" element={<DashboardRoute />} />
          <Route path="pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
