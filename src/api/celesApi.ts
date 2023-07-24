import axios from "axios"

const { VITE_URL_API_BASE, VITE_SHOPIFY_ACCESS_TOKEN } = import.meta.env

export const celesApi = axios.create({
  baseURL: VITE_URL_API_BASE,
})

celesApi.interceptors.request.use((config) => {
  config.headers["X-Shopify-Acess-Token"] = VITE_SHOPIFY_ACCESS_TOKEN

  return config
})
