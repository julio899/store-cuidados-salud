<script setup lang="ts">
interface AppEyebrowProps {
  dot?: boolean
  centered?: boolean
  dotColor?: string
  lineColor?: string
}

withDefaults(defineProps<AppEyebrowProps>(), {
  dot: true,
  centered: false,
})
</script>

<template>
  <span :class="['eyebrow', { center: centered }]">
    <span v-if="dot" class="dot" />
    <slot />
  </span>
</template>
