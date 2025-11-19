// Crea un componente boton, que al pulsarlo muestre como texto del boton
// "me has pulsado" y se ponga de color "rojo"
// al dejar de pulsarlo, vuelve a la normalidad

import { useState } from "react"

function MiBoton() {

    const [pulsado, setPulsado] = useState(false)

    function handlePulsado() {
        setPulsado(true)
    }

    function handleDespulsado() {
        setPulsado(false)
    }

    return <button onMouseDown={handlePulsado} onMouseUp={handleDespulsado} onMouseLeave={handleDespulsado} style={{backgroundColor: pulsado?'red':'black'}}>{pulsado?'Me has pulsado':'Pulsame'}</button>

}

export default function Ejem09() {
    return <MiBoton/>
}