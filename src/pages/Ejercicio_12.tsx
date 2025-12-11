/* 
Muestra por pantalla una lista de nombres (almacenados en un array)
Se pondrá mediante un formulario añadir nombres nuevos
Tambien se podrá borrar alguno de esos nombres
Si pago el magosto ponerle algun simbolo
 */

import { useState, type ChangeEvent, type FormEvent } from "react"

type Person = {
    id: number,
    name: string,
    hasPaid: boolean
}

const initialPeople: Person[] = [
    { id: 1, name: 'Jose', hasPaid: false },
    { id: 2, name: 'Ana', hasPaid: true },
    { id: 4, name: 'Paula', hasPaid: false },
    { id: 5, name: 'Juan', hasPaid: true },
    
]

export default function Ejercicio_11() {
    const [people, setPeople] = useState(initialPeople)
    const [form, setForm] = useState(
        {
            name: '',
        }
    )

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { value, name } = event.target
        setForm({ ...form, [name]: value })
    }
    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        if(!form.name) return
        setPeople( [...people , {id:Date.now(), name:form.name, hasPaid:false}] )
    }
    function handleDelete(id:number){
        const result = window.confirm('Estás seguro que quieres borrar?')
        if(!result) return
        setPeople(  people.filter(person=>person.id != id)  )
    }
    function handleTogglePay(id: number){
        const newPeople = people.map(person => 
            person.id === id ? {...person, hasPaid:!person.hasPaid} : person)
        setPeople(newPeople)
    }

    return <div>
        <h1>Lista de pagos del Magosto</h1>
        {/* formulario */}
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6 mt-6">
            <label className="flex flex-row gap-4">
                Nombre: 
                <input className="p-1 border rounded-xl" placeholder="Nuevo nombre..." name="name" value={form.name} onChange={handleChange} />
            </label>
            <button className="p-1 border rounded-xl hover:bg-gray-700">Añadir</button>
        </form>
        {/* lista */}
        <ul>
            {people.map( person => (
                <li className="" key={person.id}> 
                <span>{person.hasPaid?'✔':'💩'}</span>
                <span style={{color: person.hasPaid?'green':'orange'}}>{person.name} </span>
                <button className="text-red-600 border rounded-3xl ml-3 mr-2 mt-1.5" onClick={()=>handleDelete(person.id)}>X</button>
                <button onClick={()=>handleTogglePay(person.id)}>{person.hasPaid ? 'Ha pagado': 'No ha pagado'}</button>
                </li>
            ))}
        </ul>

    </div>
}