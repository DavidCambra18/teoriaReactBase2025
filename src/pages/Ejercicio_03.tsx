/* 
Crea un componente que reciba 2 valores numericos.
El componente tambien recibe una función a ejecutarse
Ej
fuction sumar(n1, n2) {
    return n1+n2
}

El componente tendrá que mostrar el resultado de ejecutar la operación con esos 2 numeros
*/

interface Props{
    a: number
    b: number
    funcion: (a: number, b: number) => number 
}

function Calculador({a, b, funcion}: Props) {
    return funcion(a, b)
}

const sumar = (n1: number, n2: number) => n1 + n2
const restar = (n1: number, n2: number) => n1 - n2
const multiplicar = (n1: number, n2: number) => n1 * n2

export default function Ejercicio_03() {
    return <div>
        <Calculador a={4} b={7} funcion={sumar} />
    </div>
}
