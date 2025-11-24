import { useState } from "react"

function Contador() {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount((prev) => prev + 1)
        setCount((prev) => prev + 1)
        setCount((prev) => prev + 1)
    }
    return <button onClick={handleClick}>{count}</button>
}

export default function Ejem_12() {
    return <div>
        <Contador />
    </div>
}