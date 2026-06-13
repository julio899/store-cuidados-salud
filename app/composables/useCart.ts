import type { Product } from '~/types'

export interface CartItem {
  product: Product
  quantity: number
}

const cart = ref<CartItem[]>([])
const isCartOpen = ref(false)
const justAdded = ref(false)

let pulseTimer: ReturnType<typeof setTimeout> | null = null

export function useCart() {
  const itemCount = computed(() =>
    cart.value.reduce((sum, item) => sum + item.quantity, 0),
  )

  const subtotal = computed(() =>
    cart.value.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    ),
  )

  function addItem(product: Product, quantity = 1) {
    const existing = cart.value.find((i) => i.product.id === product.id)
    if (existing) {
      existing.quantity += quantity
    } else {
      cart.value.push({ product, quantity })
    }

    justAdded.value = true
    if (pulseTimer) clearTimeout(pulseTimer)
    pulseTimer = setTimeout(() => {
      justAdded.value = false
    }, 600)
  }

  function removeItem(productId: string) {
    cart.value = cart.value.filter((i) => i.product.id !== productId)
  }

  function updateQuantity(productId: string, quantity: number) {
    const item = cart.value.find((i) => i.product.id === productId)
    if (!item) return
    if (quantity <= 0) {
      removeItem(productId)
    } else {
      item.quantity = quantity
    }
  }

  function clearCart() {
    cart.value = []
  }

  function toggleCart() {
    isCartOpen.value = !isCartOpen.value
  }

  function openCart() {
    isCartOpen.value = true
  }

  function closeCart() {
    isCartOpen.value = false
  }

  return {
    cart,
    isCartOpen,
    justAdded,
    itemCount,
    subtotal,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart,
    openCart,
    closeCart,
  }
}
