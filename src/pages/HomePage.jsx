import { useState } from "react"
import RecipeList from "../components/RecipeList"
import SearchBar from "../components/SearchBar"
import CategoryFilter from "../components/CategoryFilter"
import useFetch from "../hooks/useFetch"

export default function HomePage() {
    const [query, setQuery] = useState('')
    const [select, setSelect] = useState('Chicken')

    const urlCategorias = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    const { data: categoryData, loading: categoryLoading, error: categoryError } = useFetch(urlCategorias) 
    const categoryNames = categoryData?.categories.map((c) => c.strCategory) ?? [] 

    const urlRecetas = query
    ?`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}` // encodeURIComponent por si hay espacios o caracteres
    : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(select)}`
    const {data: recipeData, loading: recetaLoading, error: recetaError } = useFetch(urlRecetas)
    const meals = recipeData?.meals ?? []
    //limpia el buscador cuando cambio de categoria 
    const handleSelectCategory = (category) => {
        setQuery('')
        setSelect(category)
    }
    

    return (
        <div>
            <SearchBar value={query} onSearch={setQuery} />

            {categoryLoading && <p>Cargando categorias...</p>}
            {categoryError && <p>Error: {categoryError}</p>}
            {!categoryLoading && !categoryError &&(
                <CategoryFilter categories={categoryNames} selected={select} onSelect={handleSelectCategory}/>
            )}

            <p>Buscando: {query}</p>

            {recetaLoading && <p>Cargando recetas...</p>}
            {recetaError && <p>Error: {recetaError}</p>}
            {!recetaLoading && !recetaError && meals.length === 0 && <p>Sin resultados</p>}
            {!recetaLoading && !recetaError && meals.length > 0 && <RecipeList recetas={meals}/>}


            
        </div>
    )
}