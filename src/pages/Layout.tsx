import { Outlet } from "react-router-dom"
import Menu from "../components/Menu"

export default function Layout() {
    return (
        <main style={{ display: 'flex', height: '100vh' }}>
            <Menu />
            <div style={{ flex: 1, overflowY: 'auto', marginLeft: '280px' }}>
                <Outlet />
            </div>
        </main>
    )
}