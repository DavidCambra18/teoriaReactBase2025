import { Link } from "react-router-dom"

export default function Menu() {
    return (
        <nav>
            <ul>
                <Link to="/Ejem1">Ejem01</Link>
                <Link to="/Ejem2">Ejem02</Link>
                <Link to="/Ejem3">Ejem03</Link>
            </ul>
        </nav>
    )
}