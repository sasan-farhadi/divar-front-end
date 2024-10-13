import { Route, Routes } from "react-router-dom"

import PageNotFound from "pages/404"
import AdminPage from "pages/AdminPage"
import AuthPage from "pages/AuthPage"
import DashboardPage from "pages/DashboardPage"
import HomePage from "pages/HomePage"

const Router = () => {
    return (
        <div>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    )
}

export default Router
