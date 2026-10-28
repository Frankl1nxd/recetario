

export default function CategoryFilter({ categories, selected, onSelect }) {
    return (
        <div className="category-filter">
            {categories.map((category) => (
                <button
                    key={category}
                    className={category === selected ? 'category-btn active' : 'category-btn'}
                    onClick={() => onSelect(category)}

                >
                    
                    {category}
                    
                </button>
            ))}
        </div>
        
    )
}