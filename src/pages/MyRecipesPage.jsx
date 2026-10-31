import BackButton from "../components/BackButton"
import RecipeForm from "../components/RecipeForm"
import useLocalStorage from "../hooks/useLocalStorage"
import MyRecipeCard from "../components/MyRecipeCard"
import useFetch from "../hooks/useFetch"

export default function MyRecipesPage() {
    const [recipes, setRecipes] = useLocalStorage('myRecipes', [])

    const addRecipe = (recipe) => setRecipes((prev) => [...prev, recipe])
    const deleteRecipe = (id) => {
        if (!window.confirm('Estas seguro que quieres eliminar esta receta?')) return
        setRecipes((prev) => prev.filter((r) => id !== r.id))
    }

    const urlCategorias = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    const { data: categoryData} = useFetch(urlCategorias)
    const categoryNames = categoryData?.categories.map((c) => c.strCategory) ?? []


    return (
        <div className="my-recipes-container">
            <BackButton />

            <h1 className="page-title"> Mis recetas </h1>
            <RecipeForm
                categories={categoryNames}
                onAddRecipe={addRecipe}
            />

            {recipes.length === 0 ? (
                <div className="empty-state">
                     <div className="icon">🍳</div>
                    <h3>Aun no has creado ninguna receta</h3>
                    <p>Usa el formulario arriba para agregar una nueva receta</p>
                </div>
                
            ) : (
                <div >
                    {recipes.map((r) => (
                        <MyRecipeCard key={r.id} recipe={r} onDelete={deleteRecipe}/>
                        
                    ))}
                </div>
            )}
            
        </div>
    )
}