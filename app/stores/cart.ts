import { defineStore } from 'pinia'
import type { Product } from '~/types'
import type { CartItem } from '~/types'

interface FlyProduct {
  image: string
  srcRect: DOMRect
}

interface CartState {
  items: CartItem[]
  isOpen: boolean
  justAdded: boolean
}

const STORAGE_KEY = 'pielstore-cart'

function loadState(): CartState {
  if (import.meta.server) return { items: [], isOpen: false, justAdded: false }
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      return { items: parsed.items || [], isOpen: false, justAdded: false }
    }
  } catch {}
  return { items: [], isOpen: false, justAdded: false }
}

function saveState(items: CartItem[]) {
  if (import.meta.server) return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ items }))
  } catch {}
}

let pulseTimer: ReturnType<typeof setTimeout> | null = null

export const useCartStore = defineStore('cart', () => {
  const initial = loadState()
  const items = ref<CartItem[]>(initial.items)
  const isOpen = ref(false)
  const justAdded = ref(false)
  const flyProduct = ref<FlyProduct | null>(null)

  const itemCount = computed(() =>
    items.value.reduce((sum, item) => sum + item.quantity, 0),
  )

  const subtotal = computed(() =>
    items.value.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    ),
  )

  function persist() {
    saveState(items.value)
  }

  function addItem(product: Product, quantity = 1) {
    const existing = items.value.find((i) => i.product.id === product.id)
    if (existing) {
      existing.quantity += quantity
    } else {
      items.value.push({ product, quantity })
    }
    persist()

    justAdded.value = true
    if (pulseTimer) clearTimeout(pulseTimer)
    pulseTimer = setTimeout(() => {
      justAdded.value = false
    }, 600)
  }

  function removeItem(productId: string) {
    items.value = items.value.filter((i) => i.product.id !== productId)
    persist()
  }

  function updateQuantity(productId: string, quantity: number) {
    const item = items.value.find((i) => i.product.id === productId)
    if (!item) return
    if (quantity <= 0) {
      removeItem(productId)
    } else {
      item.quantity = quantity
      persist()
    }
  }

  function clearCart() {
    items.value = []
    persist()
  }

  function toggleCart() {
    isOpen.value = !isOpen.value
  }

  function openCart() {
    isOpen.value = true
  }

  function closeCart() {
    isOpen.value = false
  }

  function setFlyProduct(image: string, srcRect: DOMRect) {
    flyProduct.value = { image, srcRect }
  }

  function clearFlyProduct() {
    flyProduct.value = null
  }

  return {
    items,
    isOpen,
    justAdded,
    flyProduct,
    itemCount,
    subtotal,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart,
    openCart,
    closeCart,
    setFlyProduct,
    clearFlyProduct,
  }
})
