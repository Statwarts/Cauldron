import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/home'
import DashboardRoute from './pages/dashboard/dashboardRoute'
import Pricing from './pages/pricing/pricing'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard/*" element={<DashboardRoute />} />
          <Route path="pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
