import { useState } from "react"

export const useFilters = () => {
  const [limitPerPage, setLimitPerPage] = useState(10)
  const [idFilter, setIdFilter] = useState("")
  const [nameFilter, setNameFilter] = useState("")

  const hanldeIdFilterChange = (id: string) => setIdFilter(id)
  const handleNameFilterChange = (name: string) => setNameFilter(name)

  const handleLimitPerPageChange = (newLimit: number) => setLimitPerPage(newLimit)

  return {
    limitPerPage,
    handleLimitPerPageChange,
    idFilter,
    nameFilter,
    hanldeIdFilterChange,
    handleNameFilterChange,
  }
}
