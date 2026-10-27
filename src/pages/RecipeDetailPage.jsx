import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"

export default function RecipeDetailPage() {
    const { id } = useParams()
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    const { data, loading, error } = useFetch(url)

    if (loading) return <p>Cargando...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <h1> Detalles de la receta {id}</h1>
    )
}