import { useParams } from "react-router-dom"

export default function Ejem21() {
    const { id } = useParams()
    return <div>
        Mostrando el usuario {id}
    </div>
}