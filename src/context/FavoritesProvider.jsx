import { FavoritesContext } from "./FavoritesContext";
import useLocalStorage from "../hooks/useLocalStorage";

export default function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useLocalStorage('favorites', [])

    const isFavorite = (id) => favorites.some((recipe) => recipe.idMeal === id)

    const toggleFavorite = (recipe) => {
        if(isFavorite(recipe.idMeal)) {
            setFavorites(favorites.filter((r) => r.idMeal !== recipe.idMeal ))
        } else {
            setFavorites([...favorites, recipe])
        }
    }

    const value = {favorites, isFavorite, toggleFavorite}

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}