<script setup lang="ts">
interface RevealWrapperProps {
  delay?: 0 | 1 | 2 | 3 | 4 | 5
  threshold?: number
}

const props = withDefaults(defineProps<RevealWrapperProps>(), {
  delay: 0,
  threshold: 0.12,
})

const el = ref<HTMLElement>()
const { isVisible } = useScrollReveal(el, {
  threshold: props.threshold,
  rootMargin: '0px 0px -40px 0px',
})
</script>

<template>
  <div
    ref="el"
    :class="['reveal', { in: isVisible }]"
    :style="props.delay ? { transitionDelay: `${props.delay * 0.08}s` } : undefined"
  >
    <slot />
  </div>
</template>
