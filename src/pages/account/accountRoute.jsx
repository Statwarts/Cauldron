import { BrowserRouter,Route,Routes } from "react-router-dom";
import Account from "./account";
import Analytics from "./analytics";
import Usage from "./usage";

export default function AccountRoute() {
    return (
        
            <Routes>
                <Route path="/" element={<Account />} />
                <Route path = "analytics" element={<Analytics />} />
                <Route path = "usage" element={<Usage />} />
                
            </Routes>
        
    )
}