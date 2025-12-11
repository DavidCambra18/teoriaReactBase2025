/*
Crea un componente que tenga una caja de texto.
Cuando el usuario escriba un texto que tenga 5 caracteres, se mostrará 
un mensaje en la consola indicando: "¡Has escrito 5 caracteres!".

El componente también mostrará en pantalla (debajo de la caja de texto) 
el número de caracteres escritos en la caja de texto (length).
*/

import { useState, type ChangeEvent } from "react"

export default function Ejercicio_11() {
    const [texto, setTexto] = useState("")

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setTexto(e.target.value)
        console.log("Has escrito " + texto.length + " caracteres!")
    }

    return <div>
        <input type="text" value={texto} onChange={handleChange} style={{ border: "solid 2px white", borderRadius: "10px" }} />
        <div style={{marginTop: "10px"}}>
            <span>Número de caracteres: </span>{texto.length}
        </div>
    </div>
}