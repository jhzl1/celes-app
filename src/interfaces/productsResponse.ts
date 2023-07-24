export interface ProductResponse {
  products: Product[]
}

export interface Product {
  id: number
  title: string
  body_html: null | string
  vendor: string
  product_type: string
  created_at: Date
  handle: string
  updated_at: Date
  published_at: Date
  template_suffix: null
  status: string
  published_scope: string
  tags: string
  admin_graphql_api_id: string
  variants: Variant[]
  options: Option[]
  images: ProductImage[]
  image: ProductImage | null
}

export interface ProductImage {
  id: number
  product_id: number
  position: number
  created_at: Date
  updated_at: Date
  alt: null
  width: number
  height: number
  src: string
  admin_graphql_api_id: string
}

export interface Option {
  id: number
  product_id: number
  name: string
  position: number
  values: string[]
}

export interface Variant {
  id: number
  product_id: number
  title: string
  price: string
  sku: string
  position: number
  inventory_policy: string
  compare_at_price: null
  fulfillment_service: string
  inventory_management: string | null
  option1: string | null
  option2: null
  option3: null
  created_at: Date
  updated_at: Date
  taxable: boolean
  barcode: null
  grams: number
  image_id: null
  weight: number
  weight_unit: string
  inventory_item_id: number
  inventory_quantity: number
  old_inventory_quantity: number
  requires_shipping: boolean
  admin_graphql_api_id: string
}
