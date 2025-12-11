import { useState, type ChangeEvent, type FormEvent } from "react"

export default function Ejem19() {

    const [form, setForm] = useState(
        {
            name: 'Juan',
            surname: 'Gonzalez',
            email: '',
            edad: 20
        }
    )

    const [name, setName] = useState('Manolo')

    function handleChangeName(event: ChangeEvent<HTMLInputElement>) {
        const {value, name} = event.target
        setForm({...form, [name]: value})
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        // Hago lo que quiero
        console.log('Se envió el formulario: ' + form)
    }

    return <form onSubmit={handleSubmit}>
        <label>
            Nombre: <input name="name" value={form.name} onChange={handleChangeName} />
        </label>
        <label>
            Apellidos: <input name="surname" value={form.surname} onChange={handleChangeName} />
        </label>
        <label>
            Email: <input name="email" value={form.email} onChange={handleChangeName} />
        </label>
        <label>
            Edad: <input name="edad" value={form.edad} onChange={handleChangeName} />
        </label>
        <button type="submit">Enviar</button>
    </form>
}