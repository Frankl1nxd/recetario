
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RecipeDetailPage from './pages/RecipeDetailPage'
import MyRecipesPage from './pages/MyRecipesPage'
import FavoritesPage from './pages/FavoritesPage'
import NotFoundPage from './pages/NotFoundPage'
import Layout from './components/Layout'


function App() {
  

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/mis-recetas' element={<MyRecipesPage />} />
          <Route path='/receta/:id' element={<RecipeDetailPage />} />
          <Route path='/favoritas' element={<FavoritesPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
