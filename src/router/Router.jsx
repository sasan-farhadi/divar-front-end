import { Navigate, Route, Routes } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

import PageNotFound from "pages/404"
import AdminPage from "pages/AdminPage"
import AuthPage from "pages/AuthPage"
import DashboardPage from "pages/DashboardPage"
import HomePage from "pages/HomePage"
import { getProfile } from "services/user"
import Loader from "components/module/Loader"

const Router = () => {
    const { data, isLoading } = useQuery(["profile"], getProfile)

    if (isLoading) return <Loader />
    //09189990099 admin
    return (
        <div>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/dashboard" element={data ? <DashboardPage /> : <Navigate to="/auth" />} />
                <Route path="/auth" element={data ? <Navigate to="/dashboard" /> : <AuthPage />} />
                <Route path="/admin" element={data && data.data.role === "ADMIN" ? <AdminPage /> : <Navigate to="/" />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    )
}

export default Router
