import RecipeList from "../components/RecipeList"

export default function HomePage() {
    const recetas = [
        {idMeal: '1', strMeal: 'Arroz con Mango', strMealThumb: 'https://www.themealdb.com/images/media/meals/2dsltq1560461468.jpg'},
        {idMeal: '2', strMeal: 'Arroz con Mango', strMealThumb: 'https://www.themealdb.com/images/media/meals/2dsltq1560461468.jpg'},
        {idMeal: '3', strMeal: 'Arroz con Mango', strMealThumb: 'https://www.themealdb.com/images/media/meals/2dsltq1560461468.jpg'},
    ]

    return (<RecipeList recetas={recetas}/>)
}