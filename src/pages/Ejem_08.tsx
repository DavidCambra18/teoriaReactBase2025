interface Props {
    children: React.ReactNode
}

function MiComponente({children}:Props) {
    return <div>{children}</div>
}

export default function Ejem08() {
    return <MiComponente>hola</MiComponente>
}