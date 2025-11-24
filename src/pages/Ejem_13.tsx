import { useEffect, useState } from "react"

export default function Ejem13() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    // const miAccion = () => console.log('hola')

    // Esto se ejecuta la primera vez (solo la primera vez)
    useEffect(() => console.log('hola me pinto cuando se renderiza el componente'), [])

    // Se va a ejecutar solo cuando el estado count2 cambie de valor
    useEffect(() => console.log('hola me pinto cuando el estado 2 (count2) cambia'), [count2])

    // Se va a ejecutar cuando cambie cualquier estado
    useEffect(() => console.log('hola me pinto cuando cualquier estado cambie'))
    
    return <div>
        <button onClick={() => setCount1(count1 + 1)}>{count1}</button>
        <button onClick={() => setCount2(count2 + 1)}>{count2}</button>
    </div>
}