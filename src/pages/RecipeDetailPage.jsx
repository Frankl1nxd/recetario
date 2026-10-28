import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"

export default function RecipeDetailPage() {
    const { id } = useParams()
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    const { data, loading, error } = useFetch(url)
    const recipeDetail = data?.meals?.[0] ?? null //saco el detalle de la receta.

    if (loading) return <p>Cargando...</p>
    if (error) return <p>Error: {error}</p>
    if (!recipeDetail) return <p>Receta no encontrada</p>

    return (
        <article className="recipe-detail">
            <img src={recipeDetail.strMealThumb} alt={recipeDetail.strMeal} />
            <h1>{recipeDetail.strMeal}</h1>
            <p>{recipeDetail.strCategory}</p>
            <p>{recipeDetail.strArea}</p>

            <h2>Instrucciones</h2>
            <p>{recipeDetail.strInstructions}</p>

            <h2>Video de preparacion</h2>
            <p>{recipeDetail.strYoutube}</p>
        </article>
    )
}