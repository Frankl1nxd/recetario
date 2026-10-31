
export default function SearchBar({ value, onSearch }) {
    return (
        <div className="search-container">
            <div className="search-bar">
                <input
                    
                    type="text"
                    placeholder="Buscar recetas..."
                    value={value}
                    onChange={(e) => onSearch(e.target.value)}
                />
                <button type="button">Buscar</button>
            </div>
        </div>

    )
}