import { shopifyCelesApi } from "api/shopifyCelesApi"
import { ProductResponse } from "interfaces"

export const getProductDetail = async (productId: string) => {
  const { data } = await shopifyCelesApi.get<ProductResponse>(`/products/${productId}.json`)

  return data.product
}
