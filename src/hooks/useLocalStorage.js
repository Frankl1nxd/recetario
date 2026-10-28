import { useEffect, useState } from "react";

export default function useLocalStorage ( key, initialValue ) {
    const [value, setValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            return initialValue
        }
    })

    useEffect(() => {
        try {
            setValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.error(error)
        }
        
    }, [key, value])

    return [value, setValue]
}