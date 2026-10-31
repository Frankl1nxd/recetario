import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import getIngredients from "../utils/getIngredients"
import BackButton from "../components/BackButton"
import useFavorites from "../hooks/useFavorites"
import FavoriteButton from "../components/FavoriteButton"

export default function RecipeDetailPage() {
    const { isFavorite, toggleFavorite } = useFavorites()
    const { id } = useParams()

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    const { data, loading, error } = useFetch(url)
    const recipeDetail = data?.meals?.[0] ?? null //saco el detalle de la receta.

    if (loading) return <p className="loading-spinner" role="status" aria-label="Cargando"></p>
    if (error) return <p className="error-message" role="status">Error: {error}</p>
    if (!recipeDetail) return <p>Receta no encontrada</p>

    const ingredients = getIngredients(recipeDetail)

    const videoId = recipeDetail.strYoutube?.split('v=')[1]
    //console.log(ingredients)

    return (

        <div className="recipe-detail">
            <BackButton />
            <img className="hero-image" src={recipeDetail.strMealThumb} alt={recipeDetail.strMeal} />

            <div className="detail-header">

                <h1 className="detail-title">{recipeDetail.strMeal}</h1>
                <div className="detail-meta">
                    <p className="badge">{recipeDetail.strCategory}</p>
                    <p>{recipeDetail.strArea}</p>

                    <FavoriteButton
                        className=""
                        isFavorite={isFavorite(recipeDetail.idMeal)}
                        onToggle={() => toggleFavorite(recipeDetail)}
                    />
                </div>
            </div>

            <section className="ingredients-section">
                <h2>Ingredientes</h2>
                <ul className="ingredient-list">
                    {ingredients.map((ing) => (
                        <li key={ing.ingredient}>
                            {ing.measure}
                            {"  "}
                            {ing.ingredient}

                        </li>
                    ))}
                </ul>
            </section>


            <section className="instructions-section">
                <h2>Instrucciones</h2>
                <p className="instructions-content">{recipeDetail.strInstructions}</p>
            </section>

            {recipeDetail.strYoutube &&
                <div className="recipe-video">
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={recipeDetail.strMeal}
                        allowFullScreen
                    />

                </div>
            }

        </div>


    )
}