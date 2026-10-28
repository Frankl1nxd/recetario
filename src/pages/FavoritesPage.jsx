import BackButton from "../components/BackButton"
import useLocalStorage from "../hooks/useLocalStorage"
export default function FavoritesPage() {
    const [times, setTimes] = useLocalStorage('times', 0)
    return (
        <div>
            <button onClick={() => setTimes(times + 1)}>Click</button>
            <span>Contador: {times}</span>
            <h1> Favorites Page</h1>
            <BackButton />
        </div>
    )
}