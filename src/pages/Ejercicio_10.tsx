/*
Crea una aplicación en React que simule un sistema muy sencillo de login usando 
Context para compartir la información del usuario por toda la app.

Requisitos funcionales:

Debe existir un UserContext que guarde:
	- El usuario actual (por ejemplo: { name: "Ana", role: "admin" }), o null si no hay sesión.
	- Una función login(user) para establecer el usuario.
	- Una función logout() para cerrar sesión.
*/

import { useState, type ChangeEvent, type FormEvent } from "react";
import { useUser } from "../hooks/useUser";



export default function Ejercicio_10() {
	const {login, logout} = useUser();

	const [form, setForm] = useState(
		{
			name: 'Juan',
			role: 'Admin'
		}
	)

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		const { value, name } = event.target
		setForm({ ...form, [name]: value })
	}

	function handleSubmit(event: FormEvent) {
		event.preventDefault()
		login(form)
	}

	function handleLogout() {
		logout()
	}

	return <div>
		<form onSubmit={handleSubmit}>
			<label>
				Nombre
				<input name="name" value={form.name} onChange={handleChange} />
			</label>
			<label>
				Rol:
				<input name="role" value={form.role} onChange={handleChange} />
			</label>
			<button onClick={handleSubmit}>Loguearse</button>
		</form>
		<button onClick={handleLogout}>Desloguearse</button>
	</div>
}
