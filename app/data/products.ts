import type { Product } from '~/types'
import productsData from './products.json'

export const allProducts: Product[] = productsData as Product[]

export const bestSellerProduct: Product | undefined = allProducts.find(
  (p) => p.badge && p.badge.includes('Vendido'),
)

export const products: Product[] = allProducts.slice(0, 4)

export function getProductById(id: string): Product | undefined {
  return allProducts.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return allProducts.filter((p) => p.category === category)
}
