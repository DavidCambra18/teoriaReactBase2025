import { useState } from 'react';
import { NavLink } from "react-router-dom";
import "./Menu.css";
import { useUser } from '../hooks/useUser';

interface MenuItem {
    path: string;
    label: string;
}

export default function Menu() {
    const {currentUser} = useUser();
    const [showEjemplos, setShowEjemplos] = useState(false);
    const [showEjercicios, setShowEjercicios] = useState(false);

    const ejemplos: MenuItem[] = Array.from({ length: 30 }, (_, i) => ({
        path: `/Ejem${i + 1}`,
        label: `Ejemplo ${String(i + 1).padStart(2, '0')}`
    }));

    const ejercicios: MenuItem[] = Array.from({ length: 30 }, (_, i) => ({
        path: `/Ejercicio${i + 1}`,
        label: `Ejercicio ${String(i + 1).padStart(2, '0')}`
    }));

    const ArrowIcon = ({ isOpen }: { isOpen: boolean }) => (
        <svg 
            className={`arrow-icon ${isOpen ? 'rotate' : ''}`} 
            width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    );

    return (
        <header className="sidebar">

            <nav className="sidebar-nav">
                <div style={{marginTop: "7px", marginBottom: "7px"}}>{currentUser ? currentUser?.name:'No estas logueado'}</div>
                
                {/* --- SECCIÓN 1: EJEMPLOS (DROPDOWN) --- */}
                <div className="menu-group">
                    <button 
                        className={`dropdown-btn ${showEjemplos ? 'active' : ''}`} 
                        onClick={() => setShowEjemplos(!showEjemplos)}
                    >
                        <span>📂 Ejemplos</span>
                        <ArrowIcon isOpen={showEjemplos} />
                    </button>

                    {/* Lista desplegable */}
                    <div className={`submenu ${showEjemplos ? 'open' : ''}`}>
                        <ul>
                            {ejemplos.map((item) => (
                                <li key={item.path}>
                                    <NavLink 
                                        to={item.path}
                                        className={({ isActive }) => isActive ? "sub-link active" : "sub-link"}
                                    >
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* --- SECCIÓN 2: EJERCICIOS (DROPDOWN) --- */}
                <div className="menu-group">
                    <button 
                        className={`dropdown-btn ${showEjercicios ? 'active' : ''}`} 
                        onClick={() => setShowEjercicios(!showEjercicios)}
                    >
                        <span>🚀 Ejercicios</span>
                        <ArrowIcon isOpen={showEjercicios} />
                    </button>

                    {/* Lista desplegable */}
                    <div className={`submenu ${showEjercicios ? 'open' : ''}`}>
                        <ul>
                            {ejercicios.map((item) => (
                                <li key={item.path}>
                                    <NavLink 
                                        to={item.path}
                                        className={({ isActive }) => isActive ? "sub-link active" : "sub-link"}
                                    >
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </nav>
        </header>
    );
}