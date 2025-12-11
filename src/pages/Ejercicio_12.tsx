/* 
Muestra por pantalla una lista de nombres (almacenados en un array)
Se pondrá mediante un formulario añadir nombres nuevos
Tambien se podrá borrar alguno de esos nombres
Si pago el magosto ponerle algun simbolo
 */

import { useState, type ChangeEvent, type FormEvent } from "react"

interface Person {
    id: number
    name: string,
    paid: boolean
}

const initialPeople: Person[] = [
    { id: 1, name: "Ana", paid: true },
    { id: 2, name: "Brais", paid: false },
    { id: 3, name: "Carlos", paid: true },
];

export default function Ejercicio_12() {

    const [newName, setNewName] = useState<string>('')
    const [people, setPeople] = useState<Person[]>(initialPeople);
    const [nextId, setNextId] = useState<number>(initialPeople.reduce((max, p) => (p.id > max ? p.id : max), 0) + 1)


    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setNewName(event.target.value)

    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

        const trimmedName = newName.trim()

        if (trimmedName) {
            const newPerson: Person = {
                id: nextId,
                name: trimmedName,
                paid: false,
            };

            setPeople([...people, newPerson]);
            setNextId(nextId + 1);
            setNewName('');
        }
    }

    function handleDelete(id: number) {
        setPeople(people.filter(p => p.id !== id));
    }

    function handleTogglePaid(id: number) {
        setPeople(
            people.map(p =>
                p.id === id ? { ...p, paid: !p.paid } : p
            )
        );
    }

    return <div>
        <p>Añadir nombres nuevos</p>
        <br />
        <form>
            <div>
                <label>
                    <span>Nombre: </span>
                    <input name="name" value={newName} onChange={handleChange} />
                </label>
            </div>
            <button style={{ marginTop: "10px", fontSize: "14px" }} onClick={handleSubmit}>Añadir</button>
        </form>
        <br />
        <div>
            <span>Lista de nombres: </span>
            <ul>
                <li key={people.id}>{people.name}</li>
            </ul>
        </div>

    </div>
}