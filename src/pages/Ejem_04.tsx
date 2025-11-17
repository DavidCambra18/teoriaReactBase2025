interface Props {
    color: string
    size: number
}

function MiComponente({color, size}: Props) {
    return <div>Soy un componente de color {color}</div>
}

export default function Ejem_04() {
    return <MiComponente color="red" size={4}/>
}