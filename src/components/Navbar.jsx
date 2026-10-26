import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <NavLink
                to='/'
                end
                className={({isActive}) => (isActive ? 'link active' : 'link')}
            >
                Inicio
            </NavLink>

            <NavLink
                to='/mis-recetas'
                end
                className={({isActive}) => (isActive ? 'link active' : 'link')}
            >
                Mis Recetas
            </NavLink>

            <NavLink
                to='/favoritas'
                end
                className={({isActive}) => (isActive ? 'link active' : 'link')}
            >
                Favoritas
            </NavLink>
        </nav>
    )
}