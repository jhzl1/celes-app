import { shopifyCelesApi } from "api/shopifyCelesApi"
import { ProductResponse } from "interfaces"

export const getProductDetail = async (productId: string) => {
  const { data } = await shopifyCelesApi.get<ProductResponse>(`/products/${productId}.json`, {
    params: {
      fields: "id,title,body_html,vendor,updated_at,image",
    },
  })

  return data.product
}
