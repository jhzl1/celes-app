import { ParsedLink } from "helpers"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export const usePagination = () => {
  const [pageInfos, setPageInfos] = useState<ParsedLink>({ next: "", previous: "" })
  const navigate = useNavigate()

  const { pathname } = useLocation()

  const params = new URLSearchParams(window.location.search)

  const activePage = params.get("page_info") || ""

  const changePageInfos = (pageInfos: ParsedLink) => setPageInfos(pageInfos)

  const handleChangePage = (direction: keyof typeof pageInfos) => {
    if (!pageInfos[direction]) return

    navigate({ pathname, search: `?page_info=${pageInfos[direction]}` })
  }

  return { pageInfos, changePageInfos, handleChangePage, activePage }
}
