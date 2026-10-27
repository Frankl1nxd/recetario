import { Link } from "react-router-dom";

export default function RecipeCard({ id, photo, name }) {
    return (
        <Link to={`/receta/${id}`} className="recipe-card">
            <img src={photo} alt={name} />
            <h3>{name}</h3>

        </Link>
    )

}