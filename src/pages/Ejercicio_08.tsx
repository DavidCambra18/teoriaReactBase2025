import { useState, type ChangeEvent, type FormEvent } from "react"

export default function Ejercicio_08() {
	const [form, setForm] = useState(
		{
			title: ' ',
			body: ' '
		}
	)
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)

	function handleChange(event: ChangeEvent<HTMLInputElement>){
		const {value, name} = event.target
		setForm({...form, [name]: value})
	}

	function handleSubmit(event:FormEvent){
		setLoading(true)
		event.preventDefault()
		console.log('Se envio el formulario: ',form)

		setLoading(false)
	}

	return <form onSubmit={handleSubmit}>
		<label>
			Titulo:
			<input name="title" value={form.title} onChange={handleChange} />
		</label>
		<label>
			Body:
			<input name="body" value={form.body} onChange={handleChange}/>
		</label>
		<button disabled={loading}>Enviar {loading && 'Enviando...'}</button>
		{error && <div className="text-red-600">Hay problemas: {error}</div>}
	</form>
}
