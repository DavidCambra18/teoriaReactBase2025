import { useState } from "react"

export default function Ejem10({initialValue=200}) {
    const [numero, setNumero] = useState(initialValue)

    function handleIncrement() {
        setNumero(numero + 1)
    }

    return <div>
        {numero}
        <button onClick={handleIncrement}>Incrementar</button>
        <button onClick={() => setNumero(numero - 1)}>Decrementar</button>
    </div>
}