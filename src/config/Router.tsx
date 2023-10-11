import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../main/dashboardScreen";
import MALogin from "../authentication/login";
export default function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="dashboard/*" element={<Dashboard/>} />
                    <Route path="/" element={<MALogin />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}