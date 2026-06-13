<script setup lang="ts">
const { cart, isCartOpen, itemCount, subtotal, removeItem, updateQuantity, closeCart } = useCart()

const shippingThreshold = 50
const freeShipping = computed(() => subtotal.value >= shippingThreshold)
</script>

<template>
  <Teleport to="body">
    <!-- Backdrop -->
    <div
      v-if="isCartOpen"
      class="cart-backdrop"
      aria-hidden="true"
      @click="closeCart"
    />

    <!-- Panel -->
    <aside
      class="cart-panel"
      :class="{ open: isCartOpen }"
      aria-label="Carrito de compras"
      role="dialog"
      aria-modal="true"
    >
      <div class="cart-header">
        <h3>Tu Ritual ({{ itemCount }})</h3>
        <button class="icon-btn cart-close" aria-label="Cerrar carrito" @click="closeCart">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Empty state -->
      <div v-if="cart.length === 0" class="cart-empty">
        <p>Tu carrito está vacío.</p>
        <p class="cart-empty-hint">Agrega productos de la tienda para comenzar tu ritual.</p>
        <a href="#shop-skincare" class="btn btn-primary" @click="closeCart">
          Ver Más Vendidos
        </a>
      </div>

      <!-- Items -->
      <div v-else class="cart-items">
        <div v-for="item in cart" :key="item.product.id" class="cart-item">
          <img
            :src="item.product.image"
            :alt="item.product.name"
            class="cart-item-img"
          >
          <div class="cart-item-info">
            <div class="cart-item-name">{{ item.product.name }}</div>
            <div class="cart-item-cat">{{ item.product.category }}</div>
            <div class="cart-item-price">${{ item.product.price }}</div>

            <div class="cart-item-qty">
              <button
                class="qty-btn"
                aria-label="Disminuir cantidad"
                @click="updateQuantity(item.product.id, item.quantity - 1)"
              >−</button>
              <span class="qty-val">{{ item.quantity }}</span>
              <button
                class="qty-btn"
                aria-label="Aumentar cantidad"
                @click="updateQuantity(item.product.id, item.quantity + 1)"
              >+</button>
            </div>
          </div>
          <button
            class="cart-item-remove"
            aria-label="Eliminar producto"
            @click="removeItem(item.product.id)"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round">
              <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Footer -->
      <div v-if="cart.length > 0" class="cart-footer">
        <div v-if="!freeShipping" class="cart-shipping">
          Agrega ${{ (shippingThreshold - subtotal).toFixed(0) }} más para envío gratis
        </div>
        <div v-else class="cart-shipping free">
          ✓ Envío gratis desbloqueado
        </div>

        <div class="cart-total">
          <span>Subtotal</span>
          <span class="total-price">${{ subtotal.toFixed(2) }}</span>
        </div>

        <button class="btn btn-primary cart-checkout-btn" @click="closeCart">
          Pagar — ${{ subtotal.toFixed(2) }}
        </button>

        <button class="cart-continue" @click="closeCart">
          Seguir comprando
        </button>
      </div>
    </aside>
  </Teleport>
</template>

<style scoped>
.cart-backdrop {
  position: fixed; inset: 0; z-index: 200;
  background: rgba(26,26,26,0.35);
  backdrop-filter: blur(4px);
  animation: fadeIn .3s var(--ease);
}
@keyframes fadeIn { from { opacity: 0; } }

.cart-panel {
  position: fixed; top: 0; right: 0; bottom: 0; z-index: 201;
  width: min(440px, 92vw); background: var(--bone);
  display: flex; flex-direction: column;
  transform: translateX(100%);
  transition: transform .45s var(--ease);
  box-shadow: -8px 0 40px -20px rgba(26,26,26,0.2);
}
.cart-panel.open { transform: translateX(0); }

.cart-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 22px 24px;
  border-bottom: 1px solid var(--bone-3);
}
.cart-header h3 {
  font-family: var(--serif); font-size: 22px; font-weight: 400;
}

.cart-close svg { width: 20px; height: 20px; }

.cart-empty {
  flex: 1; display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  padding: 3rem 2rem; text-align: center;
  color: var(--ink-soft);
  gap: 12px;
}
.cart-empty-hint { font-size: 14px; color: var(--muted); }
.cart-empty .btn { margin-top: 1rem; }

.cart-items {
  flex: 1; overflow-y: auto; padding: 16px 24px;
  display: flex; flex-direction: column; gap: 16px;
}

.cart-item {
  display: flex; gap: 14px; align-items: flex-start;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--line);
}
.cart-item-img {
  width: 80px; height: 80px; object-fit: cover;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
}
.cart-item-info { flex: 1; min-width: 0; }
.cart-item-name {
  font-family: var(--serif); font-size: 18px; line-height: 1.2;
}
.cart-item-cat {
  font-size: 11px; color: var(--clay); text-transform: uppercase;
  letter-spacing: 0.12em; margin-top: 3px;
}
.cart-item-price {
  font-size: 14px; color: var(--ink); margin-top: 6px; font-weight: 500;
}

.cart-item-qty {
  display: flex; align-items: center; gap: 0; margin-top: 10px;
  border: 1px solid var(--bone-3); border-radius: 999px;
  width: fit-content; overflow: hidden;
}
.qty-btn {
  width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;
  font-size: 16px; color: var(--ink); transition: background .2s var(--ease);
}
.qty-btn:hover { background: var(--bone-2); }
.qty-val {
  width: 32px; text-align: center; font-size: 13px; font-weight: 500;
}

.cart-item-remove {
  padding: 6px; color: var(--muted); transition: color .2s var(--ease);
  flex-shrink: 0;
}
.cart-item-remove:hover { color: var(--clay); }
.cart-item-remove svg { width: 16px; height: 16px; }

.cart-footer {
  padding: 20px 24px 28px;
  border-top: 1px solid var(--bone-3);
  display: flex; flex-direction: column; gap: 12px;
}

.cart-shipping {
  font-size: 12px; color: var(--clay); text-align: center;
  background: rgba(181,86,58,0.08); padding: 10px 14px; border-radius: 999px;
}
.cart-shipping.free {
  background: rgba(122,138,107,0.12); color: var(--sage);
}

.cart-total {
  display: flex; justify-content: space-between; align-items: baseline;
  font-size: 16px; color: var(--ink);
}
.total-price {
  font-family: var(--serif); font-size: 24px; font-weight: 400;
}

.cart-checkout-btn {
  width: 100%; justify-content: center; padding: 16px;
}

.cart-continue {
  font-size: 13px; color: var(--muted); text-align: center;
  padding: 8px; transition: color .2s var(--ease);
}
.cart-continue:hover { color: var(--ink); }
</style>
