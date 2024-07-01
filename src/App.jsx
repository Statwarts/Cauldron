import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import DashboardRoute from './pages/dashboard/dashboardRoute'
import Pricing from './pages/pricing/pricing'
import Register from './pages/register/register'
import PrivacyPolicy from "./pages/legalStuff/privacyPolicyPage"
import TermsofService from "./pages/legalStuff/TermsofService"
import Nav from './components/Nav/Nav'

function App() {


  return (
    <>
      <BrowserRouter>
    <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path= "/register" element={<Register />} />
          <Route path="dashboard/*" element={<DashboardRoute />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/Register" element={<Register />} />
          <Route path="termsofservice" element={<TermsofService />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
