import { useState } from "react"

export const useFilters = () => {
  const [limitPerPage, setLimitPerPage] = useState(10)

  const handleLimitPerPageChange = (newLimit: number) => setLimitPerPage(newLimit)

  return { limitPerPage, handleLimitPerPageChange }
}
