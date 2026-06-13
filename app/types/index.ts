export interface NavLink {
  label: string
  to: string
}

export interface CategoryItem {
  title: string
  description: string
  image: string
  link: string
}

export interface Product {
  id: string
  name: string
  category: string
  price: number
  compareAtPrice?: number
  image: string
  images?: string[]
  description?: string
  features?: string[]
  howToUse?: string
  ingredients?: string
  rating?: number
  reviewCount?: number
  badge?: string
  swatches?: Swatch[]
  inStock?: boolean
}

export interface Swatch {
  label: string
  color: string
  image?: string
}

export interface RitualStep {
  number: number
  title: string
  description: string
  image: string
}

export interface ReviewItem {
  id: string
  author: string
  avatar: string
  rating: number
  text: string
  productName: string
  verified: boolean
}

export interface FooterColumn {
  title: string
  links: NavLink[]
}

export interface SocialLink {
  platform: 'instagram' | 'tiktok' | 'pinterest' | 'youtube'
  url: string
  label: string
}

export interface TrustBadge {
  label: string
}
