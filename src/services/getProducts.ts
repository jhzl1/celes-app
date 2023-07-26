import { shopifyCelesApi } from "api/shopifyCelesApi"
import { getPageInfoQueryParam, parseHeaderLink } from "helpers"
import { ProductResponse } from "interfaces"
interface Params {
  page_info?: string
}

export const getProducts = async ({ page_info }: Params) => {
  const { data, headers } = await shopifyCelesApi.get<ProductResponse>("/products.json", {
    params: {
      limit: 10,
      page_info,
    },
  })

  const { products } = data

  const linkHeader = headers["link"]

  const parsedLinks = parseHeaderLink(linkHeader)

  const next = getPageInfoQueryParam(parsedLinks.next || "")
  const previous = getPageInfoQueryParam(parsedLinks.previous || "")

  return {
    products,
    pageInfos: {
      next,
      previous,
    },
  }
}
