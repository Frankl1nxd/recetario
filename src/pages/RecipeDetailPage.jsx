import { useParams } from "react-router-dom"

export default function RecipeDetailPage() {

    const { id } = useParams()

    return (
        <h1> Detalles de la receta {id}</h1>
    )
}