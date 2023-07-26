export interface ParsedLink {
  next?: string
  previous?: string
}

export const parseHeaderLink = (headerLink: string) => {
  const links = headerLink.split(",")

  const result: ParsedLink = {}
  links.forEach((link) => {
    const match = link.match(/<([^>]+)>;\s*rel="([^"]+)"/)
    if (match) {
      const url = match[1]
      const rel = match[2]
      result[rel as keyof typeof result] = url
    }
  })

  return result
}
export const getPageInfoQueryParam = (url: string) => {
  if (!url) return ""

  const urlObject = new URL(url)
  const queryParams = urlObject.searchParams

  const pageInfoValue = queryParams.get("page_info")

  return pageInfoValue
}
