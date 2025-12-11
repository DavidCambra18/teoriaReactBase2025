/*
Crea un formulario en react, que se conecta al endpoint que hemos construido con 
python (flask)

Endpoint:
/api/suma
*/

import { useState, type ChangeEvent, type FormEvent } from "react"

export default function Ejercicio_09() {
	const [form, setForm] = useState(
		{
			num1: 0,
			num2: 0
		}
	)

	const [result, setResult] = useState()
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<null | string>()

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		const { value, name } = event.target
		setForm({ ...form, [name]: value })
	}


	async function handleSubmit(e: FormEvent) {
		e.preventDefault()
		setLoading(true)
		try {
			const response = await fetch("http://localhost:5000/api/suma", {
				method: "POST",
				body: JSON.stringify({
					num1: Number(form.num1),
					num2: Number(form.num2)
				}),
				headers: {
					"Content-Type": "application/json"
				}
			})

			if (!response.ok) {
				throw new Error("Error en la peticion al backend")
			}

			const data = await response.json()
			setResult(data.resultado)
		} catch (error) {
			console.error("Error", error)
			setError("Error al realizar el calculo")
		} finally {
			setLoading(false)
		}
	}

	return <div>
		<form onSubmit={handleSubmit} method="POST" >
			<div style={{ marginBottom: "30px" }}>
				<label htmlFor="num1">Numero 1: </label>
				<input id="num1" name="num1" type="number" value={form.num1} onChange={handleChange} style={{ border: "solid 1px", borderRadius: "8px" }} />
			</div>
			<div style={{ marginBottom: "20px" }}>
				<label htmlFor="num2">Numero 2: </label>
				<input id="num2" name="num2" type="number" value={form.num2} onChange={handleChange} style={{ border: "solid 1px", borderRadius: "8px" }} />
			</div>
			<br />
			<button style={{color: "white", backgroundColor: "GrayText"}}>Sumar</button>
		</form>
		<div style={{marginTop: "20px"}}>Resultado: {loading ? 'calculando...' : result}</div>
		{error && <div className="text-red-400">{error}</div>}
	</div>
}
