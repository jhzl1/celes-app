import { shopifyCelesApi } from "api/shopifyCelesApi"
import { getPageInfoQueryParam, parseHeaderLink } from "helpers"
import { ProductResponse } from "interfaces"
interface Params {
  page_info?: string
  limit: number
  ids?: string
  title?: string
}

export const getProducts = async ({ page_info, limit, ids, title }: Params) => {
  const { data, headers } = await shopifyCelesApi.get<ProductResponse>("/products.json", {
    params: {
      limit,
      ...(!ids && !title && { page_info }),
      ...(ids && { ids }),
      ...(title && { title }),
    },
  })

  const { products } = data

  const linkHeader = headers["link"]

  const parsedLinks = parseHeaderLink(linkHeader)

  const next = getPageInfoQueryParam(parsedLinks?.next || "")
  const previous = getPageInfoQueryParam(parsedLinks?.previous || "")

  return {
    products,
    pageInfos: {
      next,
      previous,
    },
  }
}
