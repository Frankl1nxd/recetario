export default function FavoriteButton({isFavorite, onToggle}) {
    return (
        <button onClick={onToggle} aria-pressed={isFavorite}>
            {isFavorite ? '❤️ Quitar' : '🤍 Añadir'}
        </button>
    )
}