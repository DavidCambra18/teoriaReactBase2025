import { Outlet } from "react-router-dom"
import Menu from "./Menu"

export default function Layout() {
    return (
        <main>
            <Menu />
            <Outlet />
            <div>footer</div>
        </main>
    )
}