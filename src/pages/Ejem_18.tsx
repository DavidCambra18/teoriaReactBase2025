import { useState, type ChangeEvent, type FormEvent } from "react"

export default function Ejem18() {
    const [name, setName] = useState('Manolo')

    function handleChangeName(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value)
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        // Hago lo que quiero
        console.log('Se envió el formulario: ' + name)
    }

    return <form onSubmit={handleSubmit}>
        <label>
            Nombre: <input value={name} onChange={handleChangeName} />
        </label>
        <button type="submit">Enviar</button>
    </form>
}