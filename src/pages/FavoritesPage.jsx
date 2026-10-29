import BackButton from "../components/BackButton"
import RecipeList from "../components/RecipeList"
import useFavorites from "../hooks/useFavorites"

export default function FavoritesPage() {
    const {favorites} = useFavorites()
    return (
        <div>
            <h1>Mis favoritos</h1>
            {favorites.length === 0 ? (
                <p>Aun no tienes recetas favoritas</p>
            ): (
                    <RecipeList recetas = { favorites }/>

            )}
            
            <BackButton />
        </div>
    )
}