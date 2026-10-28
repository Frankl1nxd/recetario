
export default function SearchBar({ value, onSearch }) {
    return (
        <input
        className="search-bar"
            type="text"
            placeholder="Buscar recetas..."
            value={value}
            onChange={(e) => onSearch(e.target.value)}    
        />
    )
}