import { useEffect, useState } from 'react'

export default function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController()

        const fetchData = async () => {
            setLoading(true)
            setError(null) //Esto para limpiar errores previos

            try {
                const response = await fetch(url, { signal: controller.signal })
                if (!response.ok) {
                    throw new Error('Ocurrio un error al cargar los datos')
                }
                const resultado = await response.json()
                setData(resultado)
            } catch (err) {
                if (err.name === 'AbortError') {
                    return
                }
                setError(err.message || 'Error desconocido')
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false)
                }
            }
        }
        fetchData();

        return () => controller.abort()
    }, [url])

    return { data, loading, error }
}