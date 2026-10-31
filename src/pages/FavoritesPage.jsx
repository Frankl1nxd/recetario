import { Link } from "react-router-dom"
import BackButton from "../components/BackButton"
import RecipeList from "../components/RecipeList"
import useFavorites from "../hooks/useFavorites"

export default function FavoritesPage() {
    const {favorites} = useFavorites()
    return (
        <div className="favorite-page">
            <BackButton />
            <h1 className="page-title">Mis favoritos</h1>
            
            {favorites.length === 0 ? (

                <div className="empty-state">
                    <div className="icon">♡</div>
                    <h3>Aún no tienes favoritas</h3>
                    <p>Pulsa el corazón en cualquier receta para guardarla aquí.</p>
                    <Link to="/" className="btn-primary">Explorar recetas</Link>
                </div>

            ): (
                    <RecipeList recetas = { favorites }/>

            )}
            
        </div>
    )
}