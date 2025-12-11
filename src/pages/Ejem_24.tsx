import { useRef, useState } from "react"

function DraggableBox() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [dragging, setDragging] = useState(false)

    let offsetRef = useRef({ x: 0, y: 0 })

    function handleMouseDown(e) {
        setDragging(true)

        offsetRef.current = { x: e.clientX - position.x, y: e.clientY - position.y }

        document.addEventListener('mouseup', handleMouseUp)
        document.addEventListener('mousemove', handleMouseMove)
    }

    function handleMouseMove(e) {
        const newX = e.clientX - offsetRef.current.x
        const newY = e.clientY - offsetRef.current.y
        setPosition({ x: newX, y: newY })
    }

    function handleMouseUp(e) {
        setDragging(false)
    }

    return (
        <div style={{
            backgroundColor: "#8c8c8c",
            width: "100vw",
            height: "100vh",
            position: "relative"
        }}>
            <div
                onMouseDown={handleMouseDown}
                style={{
                    backgroundColor: "#FAC898",
                    position: "absolute",
                    width: 100,
                    height: 100,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "black",
                    userSelect: "none",
                    cursor: "grab",
                    borderRadius: 8,
                    top: position.y,
                    left: position.x
                }}>
                Arrástrame
            </div>
        </div>
    )
}

export default function Ejem24() {
    return <DraggableBox />
}