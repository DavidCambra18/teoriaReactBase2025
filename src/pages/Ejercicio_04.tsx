import { useState } from "react";

export default function Ejercicio_04() {
	const [visible, setVisible] = useState(true)

	const handleToggle = () => setVisible(!visible)

	return <div>
		{ visible && <div>Esto es un texto cualquiera</div>}
		<button onClick={handleToggle}>Toggle</button>
	</div>
}
