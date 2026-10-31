export default function FavoriteButton({isFavorite, onToggle}) {
    return (
        <button
            type="button"
            className={isFavorite ? 'favorite-btn active' : 'favorite-btn'} 
            onClick={onToggle} 
            aria-pressed={isFavorite}>
            

            {isFavorite ? '♥' : '♡'}

        </button>
    )
}