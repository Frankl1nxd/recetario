
import RecipeCard from "./RecipeCard";
import useFavorites from "../hooks/useFavorites";

export default function RecipeList({ recetas }) {
    const { isFavorite, toggleFavorite} = useFavorites()

    return (
        <div className="recipe-grid">
            {recetas.map((receta) => {
              return <RecipeCard key={receta.idMeal} id={receta.idMeal} name={receta.strMeal} photo={receta.strMealThumb}/>

                
            })}
        </div>
        

    )
}