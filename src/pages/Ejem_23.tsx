import { ThemeProvider } from "../context/ThemeProvider"
import { useTheme } from "../hooks/useTheme"

function A() {
    const { theme, setTheme } = useTheme();
    return <>
        <div>{theme}</div>
        <button onClick={() => setTheme('dark')}>Cambiar a negro el tema</button>
        <button onClick={() => setTheme('light')}>Cambiar a blanco el tema</button>
    </>
}

function B() {
    const { theme } = useTheme();
    return <>
        <div>{theme}</div>
    </>
}

export default function Ejem23() {
    return <div>
        <ThemeProvider>
            <A />
            <B />
        </ThemeProvider>
    </div>
}