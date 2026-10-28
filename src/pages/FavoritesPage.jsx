import BackButton from "../components/BackButton"
import useLocalStorage from "../hooks/useLocalStorage"
export default function FavoritesPage() {
    //const [times, setTimes] = useLocalStorage('times', 0)
    return (
        <div>
            <h1> Favorites Page</h1>
            <BackButton />
        </div>
    )
}