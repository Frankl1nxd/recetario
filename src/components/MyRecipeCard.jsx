export default function MyRecipeCard({ recipe, onDelete }) {
    return (
        <div className="my-recipe-card">
            <div className="card-info">

                {recipe.image && <img className="thumbnail" src={recipe.image} alt={recipe.name} />}
                <div>
                    <h3 className="title">{recipe.name}</h3>
                    <p className="category">{recipe.category}</p>
                </div>

            </div>

            <button className="btn-delete" onClick={() => onDelete(recipe.id)}>Eliminar</button>

            <details className="recipe-extra">
                <summary>Ver recetas</summary>
                <h3>Ingredientes</h3>
                <ul>
                    {recipe.ingredients.map((ing, i) => (
                        <li key={i}>{ing}</li>
                    ))}
                </ul>
                <h3>Instrucciones</h3>
                <p>{recipe.instructions}</p>
            </details>

        </div>
    )
}