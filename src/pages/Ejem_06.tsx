interface Props {
    mensaje: string
    color: string
    modoDeFormatear: (texto: string) => string
}

function MiComponente({mensaje, color, modoDeFormatear}:Props) {
    return <div style={{backgroundColor: color}}>
        Me has dicho: {modoDeFormatear(mensaje)}
    </div>
}

export default function Ejem06() {

    const formatearElTextoEnMayusculas = (texto: string) => texto.toUpperCase()
    
    return <MiComponente mensaje="Cebem" color="red" modoDeFormatear={formatearElTextoEnMayusculas}/>
}