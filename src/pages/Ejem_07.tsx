import { useState } from "react"

export default function Ejem07() {
    // let numerito = 56
    // numerito = 60
    const [numerito, setNumerito] = useState(100)

    function handleClick() {
        // numerito = numerito + 1
        setNumerito(numerito + 1)
        console.log('me has pulsado ', numerito)
    }

    return <div onClick={handleClick}>{numerito}</div>
}