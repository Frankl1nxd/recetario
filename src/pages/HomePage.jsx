import { useEffect, useState } from "react"
import RecipeList from "../components/RecipeList"
import SearchBar from "../components/SearchBar"
import CategoryFilter from "../components/CategoryFilter"
import useFetch from "../hooks/useFetch"
import useDebounce from "../hooks/useDebounce"
import usePagination from "../hooks/usePagination"

export default function HomePage() {

    const [query, setQuery] = useState('')
    const [select, setSelect] = useState('Chicken')

    const debouncedQuery = useDebounce(query, 500)

    const urlCategorias = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    const { data: categoryData, loading: categoryLoading, error: categoryError } = useFetch(urlCategorias)
    const categoryNames = categoryData?.categories.map((c) => c.strCategory) ?? []

    const urlRecetas = debouncedQuery
        ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(debouncedQuery)}` // encodeURIComponent por si hay espacios o caracteres
        : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(select)}`
    const { data: recipeData, loading: recetaLoading, error: recetaError } = useFetch(urlRecetas)
    const meals = recipeData?.meals ?? []

    const { currentItems, page, totalPages, next, prev, setPage } = usePagination(meals, 12)

    useEffect(() => {
        setPage(1)
    }, [debouncedQuery, select])

    //limpia el buscador cuando cambio de categoria 
    const handleSelectCategory = (category) => {
        setQuery('')
        setSelect(category)
    }

    return (
        <div>
            <SearchBar value={query} onSearch={setQuery} />

            {categoryError && <p>Error: {categoryError}</p>}
            {!categoryLoading && !categoryError && (
                <CategoryFilter categories={categoryNames} selected={select} onSelect={handleSelectCategory} />
            )}

            {recetaLoading && <p className="loading-spinner"></p>}
            {recetaError && <p>Error: {recetaError}</p>}
            {!recetaLoading && !recetaError && meals.length === 0 && <p>Sin resultados</p>}
            {!recetaLoading && !recetaError && meals.length > 0 && <RecipeList recetas={currentItems} />}
            {totalPages > 1 && (
                <div className="pagination">
                    <button onClick={prev} disabled={page === 1}>Anterior</button>
                    <span className="page-info">{ page } / { totalPages }</span>
                    <button onClick={next} disabled={page === totalPages}>Siguiente</button>
                </div>
            )}

        </div>
    )
}