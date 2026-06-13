<script setup lang="ts">
import type { NavLink } from '~/types'
import { navLinks } from '~/data/navigation'
import CartPreview from '~/components/cart/CartPreview.vue'

interface HeaderMainProps {
  logoText?: string
}

withDefaults(defineProps<HeaderMainProps>(), {
  logoText: 'PielStore',
})

const { isScrolled } = useStickyHeader()
const { itemCount, justAdded, toggleCart } = useCart()
const mobileMenuOpen = ref(false)
</script>

<template>
  <header :class="['nav', { 'is-scrolled': isScrolled }]" id="nav">
    <div class="container nav-inner">
      <nav class="nav-left" aria-label="Principal">
        <a
          v-for="link in navLinks"
          :key="link.to"
          :href="link.to"
          class="nav-link"
        >{{ link.label }}</a>
      </nav>

      <a class="logo" href="#" aria-label="PielStore inicio">{{ logoText }}</a>

      <div class="nav-right">
        <a class="nav-link" href="#quiz">Test de Piel</a>
        <button class="icon-btn" aria-label="Buscar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
          </svg>
        </button>
        <button
          class="icon-btn cart-btn"
          :class="{ 'cart-pulse': justAdded }"
          :aria-label="`Carrito, ${itemCount} productos`"
          @click="toggleCart()"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 6h2l2.4 11.2a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.5L21 9H6" />
            <circle cx="9" cy="21" r="1.2" /><circle cx="18" cy="21" r="1.2" />
          </svg>
          <span v-if="itemCount > 0" class="cart-count">{{ itemCount }}</span>
        </button>
        <a href="/shop" class="btn btn-primary nav-cta">Comprar Ahora</a>
        <button
          class="icon-btn menu-toggle"
          aria-label="Abrir menú"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
    </div>
    <CartPreview />
  </header>
</template>

<style scoped>
/* ============================================================
   NAVBAR
   ============================================================ */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  transition: background .35s var(--ease), border-color .35s var(--ease), backdrop-filter .35s var(--ease);
  border-bottom: 1px solid transparent;
}
.nav.is-scrolled {
  background: rgba(250, 247, 242, 0.78);
  backdrop-filter: saturate(160%) blur(14px);
  -webkit-backdrop-filter: saturate(160%) blur(14px);
  border-bottom-color: rgba(26,26,26,0.08);
}
.nav-inner {
  display: grid; grid-template-columns: 1fr auto 1fr; align-items: center;
  height: 76px; gap: 24px;
}
.nav-left, .nav-right { display: flex; align-items: center; gap: 28px; }
.nav-right { justify-content: flex-end; }

.logo {
  font-family: var(--serif); font-size: 26px; font-weight: 500;
  letter-spacing: 0.32em; color: var(--ink);
  text-align: center; padding-left: 0.32em;
}

.nav-link {
  font-family: var(--sans); font-size: 13px; font-weight: 500;
  color: var(--ink-soft); letter-spacing: 0.02em;
  position: relative; padding: 6px 0;
  transition: color .25s var(--ease);
}
.nav-link::after {
  content: ""; position: absolute; left: 0; right: 0; bottom: 0;
  height: 1px; background: var(--clay); transform: scaleX(0);
  transform-origin: right center; transition: transform .4s var(--ease);
}
.nav-link:hover { color: var(--ink); }
.nav-link:hover::after { transform: scaleX(1); transform-origin: left center; }

.icon-btn {
  width: 40px; height: 40px; border-radius: 50%;
  display: inline-flex; align-items: center; justify-content: center;
  color: var(--ink); transition: background .25s var(--ease);
}
.icon-btn:hover { background: rgba(26,26,26,0.06); }
.icon-btn svg { width: 18px; height: 18px; }

.cart-btn { position: relative; }

.cart-pulse {
  animation: cartPop .55s var(--ease);
}
.cart-pulse svg {
  animation: cartColorFlash .55s var(--ease);
}

@keyframes cartPop {
  0% { transform: scale(1); }
  25% { transform: scale(1.18); }
  50% { transform: scale(0.94); }
  75% { transform: scale(1.04); }
  100% { transform: scale(1); }
}

@keyframes cartColorFlash {
  0% { color: var(--ink); }
  30% { color: var(--clay); }
  100% { color: var(--ink); }
}

.cart-count {
  position: absolute; top: 4px; right: 4px;
  min-width: 16px; height: 16px; padding: 0 4px;
  background: var(--clay); color: #FBF7F1;
  font-size: 10px; font-weight: 600; line-height: 16px;
  border-radius: 999px; text-align: center;
}

.nav-cta { padding: 10px 18px; font-size: 13px; }

.menu-toggle { display: none; }
@media (max-width: 920px) {
  .nav-inner { grid-template-columns: 1fr auto 1fr; }
  .nav-left { display: none; }
  .nav-right .nav-link { display: none; }
  .menu-toggle { display: inline-flex; }
}
</style>
