import { Link } from "react-router-dom";
import useFavorites from "../hooks/useFavorites";
import FavoriteButton from "./FavoriteButton";

export default function RecipeCard({ id, photo, name }) {
    const { isFavorite, toggleFavorite } = useFavorites()
    const recipe = { idMeal: id, strMeal: name, strMealThumb: photo }

    return (
        <div className="recipe-card">

            <FavoriteButton
                isFavorite={isFavorite(id)}
                onToggle={() => toggleFavorite(recipe)}
            />

            <Link to={`/receta/${id}`} >
                <div className="card-media">
                    <img src={photo} alt={name} />
                </div>

                <div className="card-content">
                <h3 className="title">{name}</h3>

                </div>

            </Link>
            
        </div>

    )

}