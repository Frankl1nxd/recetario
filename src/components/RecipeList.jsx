
import RecipeCard from "./RecipeCard";

export default function RecipeList({ recetas }) {

    return (
        <div className="recipe-grid">
            {recetas.map((receta) => {
              return <RecipeCard key={receta.idMeal} id={receta.idMeal} name={receta.strMeal} photo={receta.strMealThumb}/>
                
            })}
        </div>
    )
}