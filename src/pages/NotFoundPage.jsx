import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className="not-found-page">
            <div className="error-code">404</div>
            <h1>Pagina no encontrada</h1>
            <p>La pagina que busca no existe o fue movida</p>
            <Link to="/" className="btn-primary">Volver al inicio</Link>

        </div>
    )
}