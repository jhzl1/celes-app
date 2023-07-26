import axios from "axios"

const { VITE_SHOPIFY_VERSION, VITE_SHOPIFY_ACCESS_TOKEN } = import.meta.env

export const celesApi = axios.create({
  baseURL: VITE_SHOPIFY_VERSION,
})

celesApi.interceptors.request.use((config) => {
  config.headers["X-Shopify-Access-Token"] = VITE_SHOPIFY_ACCESS_TOKEN

  return config
})
