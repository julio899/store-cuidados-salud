<script setup lang="ts">
interface SectionHeadProps {
  centered?: boolean
}

withDefaults(defineProps<SectionHeadProps>(), {
  centered: false,
})
</script>

<template>
  <div :class="['section-head', { center: centered }]">
    <div>
      <slot name="eyebrow" />
      <slot name="title" />
    </div>
    <p v-if="$slots.intro" class="section-intro">
      <slot name="intro" />
    </p>
    <slot name="action" />
  </div>
</template>
