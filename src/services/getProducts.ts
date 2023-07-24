import { celesApi } from "api/celesApi"
import { ProductResponse } from "interfaces"

export const getProducts = async () => {
  const { data } = await celesApi.get<ProductResponse>("/2023-04/products.json")

  return data.products
}
