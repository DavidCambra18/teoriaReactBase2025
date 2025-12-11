import { useState } from "react"

// Este Hook personalizado, deberia estar en una carpeta llamada hooks
function useCounter() {
    const [count, setCount] = useState(0)
    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }
    function reset() {
        setCount(0)
    }
    return {count, increment, decrement, reset}
}

export default function Ejem20() {
    const {count, increment, reset} = useCounter()

    return <div>
        <button onClick={increment}>Sube</button>
        {/* <button onClick={}>Baja</button> */}
        <button onClick={reset}>Resetear</button>
        {count}
    </div>
}