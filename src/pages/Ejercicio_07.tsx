/* 
Crea un componente de react que muestre el precio actual del bitcoin
(en tiempo real)
usa este api gratuita

https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur
https://min-api.cryptiocompare.com/data/price?fsym=BTC&tsyms=EUR
*/

import { useEffect, useState } from "react"

const URL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'

export default function Ejercicio_07() {
	const [price, setPrice] = useState(0)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState("")
	// loading
	// error

	// mover esto a la carpeta services
	async function bitcoinApiCall() {
		try {
			const response = await fetch(URL)
			if (!response.ok) throw new Error('Fallo al llamar a la api' + response.statusText)
			const data = await response.json()
			if (data.Response === 'Error') throw new Error('Fallo al llamar a la api' + response.statusText)
			console.log(data)
			setPrice(data.bitcoin.usd)
		} catch (error: { Message: string }) {
			console.log('Error:', error)
			setError(error.Message)
		} finally {
			setLoading(false)
		}
	}
	// Este useEffect se llama 1 sola vez cuando el componente se monta
	useEffect(() => {
		bitcoinApiCall()
	}, [])

	if (error) return <div>Error: {error}</div>
	if (loading) return <div>Llamando al api...</div>
	return <div>
		El bitcoin vale {price} $
	</div>
}
