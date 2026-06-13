<script setup lang="ts">
import type { Product } from '~/types'

interface ProductCardProps {
  product: Product
  delay?: number
}

const props = withDefaults(defineProps<ProductCardProps>(), {
  delay: 1,
})

const { addItem, openCart } = useCart()
const added = ref(false)

function handleAdd(event: MouseEvent) {
  event.preventDefault()
  addItem(props.product)
  added.value = true
  setTimeout(() => { added.value = false }, 1200)
}
</script>

<template>
  <RevealWrapper :delay="(delay as 1 | 2 | 3 | 4 | 5)">
    <a class="product" :href="`/shop/${product.id}`">
      <div class="p-img">
        <img :src="product.image" :alt="product.name" loading="lazy">
      </div>
      <div class="p-body">
        <span class="p-cat">{{ product.category }}</span>
        <div class="p-name">{{ product.name }}</div>
        <div class="p-row">
          <span class="p-price">${{ product.price }}</span>
          <button
            class="p-add"
            :class="{ added }"
            :aria-label="`Agregar ${product.name} al carrito`"
            @click="handleAdd"
          >
            <svg v-if="!added" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
            <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
          </button>
        </div>
      </div>
    </a>
  </RevealWrapper>
</template>

<style scoped>
.product {
  background: var(--bone-2); border-radius: var(--radius);
  overflow: hidden; transition: transform .45s var(--ease);
  cursor: pointer; display: flex; flex-direction: column;
}
.product:hover { transform: translateY(-4px); }
.product .p-img { aspect-ratio: 1/1; overflow: hidden; background: var(--bone-3); }
.product .p-img img {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform 1.1s var(--ease);
}
.product:hover .p-img img { transform: scale(1.06); }
.product .p-body { padding: 18px 18px 22px; }
.product .p-cat {
  font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--clay); font-weight: 500;
}
.product .p-name {
  font-family: var(--serif); font-size: 21px; margin-top: 6px; line-height: 1.2;
}
.product .p-row {
  display: flex; align-items: center; justify-content: space-between;
  margin-top: 12px;
}
.product .p-price { font-size: 15px; color: var(--ink); font-weight: 500; }
.product .p-add {
  width: 36px; height: 36px; border-radius: 50%;
  background: var(--ink); color: var(--bone);
  display: inline-flex; align-items: center; justify-content: center;
  transition: background .25s var(--ease), transform .25s var(--ease);
}
.product .p-add:hover { background: var(--clay); transform: rotate(90deg); }
.product .p-add.added { background: var(--sage); transform: none; }
.product .p-add:hover.added { transform: none; }
.product .p-add svg { width: 14px; height: 14px; }
</style>
