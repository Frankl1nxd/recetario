import { Link } from "react-router-dom";
import useFavorites from "../hooks/useFavorites";
import FavoriteButton from "./FavoriteButton";

export default function RecipeCard({ id, photo, name }) {
    const { isFavorite, toggleFavorite } = useFavorites()
    const recipe = { idMeal: id, strMeal: name, strMealThumb: photo }

    return (
        <div className="recipe-card">

            <Link to={`/receta/${id}`} >
                <img src={photo} alt={name} />
                <h3>{name}</h3>


            </Link>
            <FavoriteButton
                isFavorite={isFavorite(id)}
                onToggle={() => toggleFavorite(recipe)}
            />
        </div>

    )

}