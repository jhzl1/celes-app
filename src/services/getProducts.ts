import { celesApi } from "api/celesApi"
import { ProductResponse } from "interfaces"

export const getProducts = async () => {
  const { data } = await celesApi.get<ProductResponse>("/products.json", {
    params: {
      limit: 3,
    },
  })

  return data.products
}
