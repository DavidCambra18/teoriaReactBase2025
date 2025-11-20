interface Props {
    grados: number
}

function Conversor({ grados }: Props) {
    const toFarenheit = (grados: number) => grados * 9 / 5 + 32

    return <div>{grados}°C / {toFarenheit(grados)}°F</div>
}

export default function Ejercicio_01() {
    return <Conversor grados={32} />
}