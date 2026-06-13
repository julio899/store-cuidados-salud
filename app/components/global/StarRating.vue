<script setup lang="ts">
interface StarRatingProps {
  rating?: number
  showCount?: boolean
  count?: number
}

withDefaults(defineProps<StarRatingProps>(), {
  rating: 5,
  showCount: false,
})
</script>

<template>
  <div class="rating-row">
    <span class="stars">{{ '★'.repeat(Math.floor(rating)) }}</span>
    <span v-if="showCount && count" class="rating-count">{{ rating }} · {{ count.toLocaleString() }} reviews</span>
  </div>
</template>

<style scoped>
.rating-row {
  display: flex; align-items: center; gap: 10px;
  font-size: 13px; color: var(--ink-soft);
}
</style>
