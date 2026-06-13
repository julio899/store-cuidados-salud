export function useCart() {
  const store = useCartStore()

  const { items, isOpen, justAdded, flyProduct, itemCount, subtotal } = storeToRefs(store)

  return {
    cart: items,
    isCartOpen: isOpen,
    justAdded,
    flyProduct,
    itemCount,
    subtotal,
    addItem: store.addItem,
    removeItem: store.removeItem,
    updateQuantity: store.updateQuantity,
    clearCart: store.clearCart,
    toggleCart: store.toggleCart,
    openCart: store.openCart,
    closeCart: store.closeCart,
    setFlyProduct: store.setFlyProduct,
    clearFlyProduct: store.clearFlyProduct,
  }
}
