import { BrowserRouter,Route,Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import AccountRoute from "../account/accountRoute";

export default function DashboardRoute() {
    return (
        
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path = "account/*" element={<AccountRoute />} />
                
            </Routes>
       
    )
}