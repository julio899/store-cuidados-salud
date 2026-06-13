<script setup lang="ts">
interface ProductPriceProps {
  price: number
  compareAtPrice?: number
}

const props = defineProps<ProductPriceProps>()

const savings = computed(() => {
  if (!props.compareAtPrice) return null
  return Math.round((1 - props.price / props.compareAtPrice) * 100)
})
</script>

<template>
  <div class="bs-price">
    <span class="now">${{ price }}</span>
    <span v-if="compareAtPrice" class="was">${{ compareAtPrice }}</span>
    <span v-if="savings" class="save">Save {{ savings }}%</span>
  </div>
</template>

<style scoped>
.bs-price {
  display: flex; align-items: baseline; gap: 12px; margin-top: 2rem;
}
.bs-price .now {
  font-family: var(--serif); font-size: 36px; color: var(--ink);
}
.bs-price .was {
  font-size: 16px; color: var(--muted); text-decoration: line-through;
}
.bs-price .save {
  font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--clay); font-weight: 600;
}
</style>
