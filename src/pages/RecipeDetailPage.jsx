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

    if (loading) return <p>Cargando...</p>
    if (error) return <p>Error: {error}</p>
    if (!recipeDetail) return <p>Receta no encontrada</p>


    const ingredients = getIngredients(recipeDetail)
    //console.log(ingredients)

    return (

        <div>

            <article className="recipe-detail">
                <img src={recipeDetail.strMealThumb} alt={recipeDetail.strMeal} />
                <h1>{recipeDetail.strMeal}</h1>
                <FavoriteButton
                    isFavorite={isFavorite(recipeDetail.idMeal)}
                    onToggle={() => toggleFavorite(recipeDetail)}
                />
                <p>{recipeDetail.strCategory}</p>
                <p>{recipeDetail.strArea}</p>

                <h2>Instrucciones</h2>
                <p>{recipeDetail.strInstructions}</p>

                {recipeDetail.strYoutube &&
                    <>
                        <h3>Video de preparacion</h3>
                        <a href={recipeDetail.strYoutube} target="_blank" rel="noreferrer">Ver: {recipeDetail.strMeal}</a>
                    </>
                }

                <h2>Ingredientes</h2>
                <ul>
                    {ingredients.map((ing) => (
                        <li key={ing.ingredient}>
                            {ing.measure}
                            {"  "}
                            {ing.ingredient}

                        </li>
                    ))}
                </ul>

            </article>

            <BackButton />

        </div>


    )
}