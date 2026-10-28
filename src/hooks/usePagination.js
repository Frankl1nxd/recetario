
import { useState, useMemo } from 'react'

export default function usePagination(items, perPage) {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(items.length / perPage)

  const currentItems = useMemo(() => {
    const star = (page - 1) * perPage
    const end = page * perPage
    return items.slice(star, end)
    // corta el array con .slice(inicio, fin)
    // inicio = (page - 1) * perPage, fin = page * perPage
  }, [items, page, perPage])

  const next = () => setPage((p) => Math.min(p + 1, totalPages))
  const prev = () => setPage((p) => Math.max(p - 1, 1))

  return { currentItems, page, totalPages, next, prev, setPage }
}