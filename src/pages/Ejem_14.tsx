import { useEffect, useState } from "react"

export default function Ejem14(initialValue = 0) {
    const [second, setSecond] = useState(initialValue)

    // Esto lo hago una sola vez cuando el componente se crea (se monta)
    useEffect(
        () => {
            const interval = setInterval(() => setSecond((prev) => prev + 1), 1000)
            console.log('El componente se ha montado')
            return () => {
                console.log('El componente se desmonto')
                clearInterval(interval)
            }
        },
        []
    )

    return <div>
        Segundo {second}
    </div>
}