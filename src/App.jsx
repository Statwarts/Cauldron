import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/home";
import DashboardRoute from "./pages/dashboard/dashboardRoute";
import Pricing from "./pages/pricing/pricing";
import Register from "./pages/register/register";
import PrivacyPolicy from "./pages/legalStuff/privacyPolicyPage";
import TermsofService from "./pages/legalStuff/TermsofService";
import Nav from "./components/Nav/Nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Lenis from "lenis";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="dashboard/*" element={<DashboardRoute />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/Register" element={<Register />} />
          <Route path="termsofservice" element={<TermsofService />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
