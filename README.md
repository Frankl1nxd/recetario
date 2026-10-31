# Recetario La Maxima

Aplicación web para explorar recetas de TheMealDB, consultar sus detalles y guardar recetas favoritas o propias.

## Cómo ejecutarlo

Requiere Node.js y npm instalados.

```bash
git clone https://github.com/Frankl1nxd/recetario.git
cd recetario
npm install
npm run dev
```

Para generar la compilación de producción:

```bash
npm run build
```

## Demo

Link: https://recetario-d84f2.web.app/


## Funcionalidades

- Explorar recetas por categoría y buscar por nombre.
- Ver resultados paginados, con 12 recetas por página.
- Consultar los detalles de una receta: categoría, región, ingredientes, instrucciones y, cuando está disponible, un video de YouTube.
- Marcar y quitar recetas de favoritos.
- Crear recetas propias con nombre, categoría, ingredientes, instrucciones e imagen opcional; también es posible eliminarlas.
- Conservar favoritos y recetas propias en `localStorage`.
- Mostrar un mensaje cuando no hay resultados o una página 404 para rutas desconocidas.

## Tecnologías

- React
- Vite
- React Router DOM v6
- Context API
- `localStorage`
- API de [TheMealDB](https://www.themealdb.com/api.php)

## Rutas

Las rutas están definidas en `src/App.jsx` y comparten el diseño de `Layout`.

| Ruta | Página |
| --- | --- |
| `/` | Inicio: búsqueda, categorías y listado de recetas |
| `/mis-recetas` | Crear, consultar y eliminar recetas propias |
| `/receta/:id` | Detalle de una receta identificada por su ID |
| `/favoritas` | Listado de recetas favoritas |
| `*` | Página para rutas no encontradas |

## Estructura de `src/`

```text
src/
├── App.jsx
├── App.css
├── index.css
├── main.jsx
├── assets/
├── components/
│   ├── BackButton.jsx
│   ├── CategoryFilter.jsx
│   ├── FavoriteButton.jsx
│   ├── Layout.jsx
│   ├── MyRecipeCard.jsx
│   ├── Navbar.jsx
│   ├── RecipeCard.jsx
│   ├── RecipeForm.jsx
│   ├── RecipeList.jsx
│   └── SearchBar.jsx
├── context/
│   ├── FavoritesContext.js
│   └── FavoritesProvider.jsx
├── hooks/
│   ├── useDebounce.js
│   ├── useFavorites.js
│   ├── useFetch.js
│   ├── useLocalStorage.js
│   └── usePagination.js
├── pages/
│   ├── FavoritesPage.jsx
│   ├── HomePage.jsx
│   ├── MyRecipesPage.jsx
│   ├── NotFoundPage.jsx
│   └── RecipeDetailPage.jsx
└── utils/
    └── getIngredients.js
```

## Decisiones técnicas

### Custom hooks

- `useDebounce(valor, delay)`: aplaza la actualización del valor. En la búsqueda de recetas se usa con una espera de 500 ms.
- `useFetch(url)`: obtiene datos JSON para la URL indicada y expone `data`, `loading` y `error`. Cancela la petición anterior al cambiar la URL o desmontar el componente.
- `useLocalStorage(key, initialValue)`: inicializa el estado desde `localStorage` y guarda allí sus cambios.
- `usePagination(items, perPage)`: calcula los elementos de la página actual y ofrece controles para avanzar, retroceder y cambiar de página.
- `useFavorites()`: permite a los componentes acceder al contexto de favoritos.

### Context de favoritos

`FavoritesProvider` comparte `favorites`, `isFavorite(id)` y `toggleFavorite(recipe)` con los componentes descendientes. Los favoritos se persisten mediante `useLocalStorage` bajo la clave `favorites`.

Las recetas creadas por el usuario se guardan por separado en `localStorage`, bajo la clave `myRecipes`, desde la página «Mis recetas».


## Uso de IA

Usé IA como apoyo de aprendizaje, con permiso del profesor. Me ayudó a planificar el proyecto por fases, a entender conceptos de React con ejemplos de otros temas y a diagnosticar errores en mi código. También me dio una base de estilos CSS, los mensajes de commit y la plantilla de este README. El código de los componentes, hooks, páginas y la lógica de la app lo escribí yo.

Donde más usé la IA fue en el diseño de la interfaz: generé la UI con Stitch (Google) y luego con ayuda de Claude la adapté a mis componentes uno a uno ya que tenia la logica y funcionalidades pero no habia armado correctamente las estrucuturas html.

## Créditos

- Datos de recetas: [TheMealDB](https://www.themealdb.com/).
- Autor: Franklin Bruzual.
