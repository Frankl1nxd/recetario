import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) => (isActive ? 'link active' : 'link')

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="brand">Recetario La Maxima</div>
            <ul className="nav-links">
                <NavLink
                    to='/'
                    end
                    className={linkClass}
                >
                    Inicio
                </NavLink>

                <NavLink
                    to='/mis-recetas'
                    end
                    className={linkClass}
                >
                    Mis Recetas
                </NavLink>

                <NavLink
                    to='/favoritas'
                    end
                    className={linkClass}
                >
                    Favoritas
                </NavLink>
            </ul>
        </nav>
    )
}