<script setup lang="ts">
interface AppButtonProps {
  variant?: 'primary' | 'ghost' | 'quiz' | 'icon'
  size?: 'sm' | 'md' | 'lg'
  tag?: 'a' | 'button'
  to?: string
  href?: string
  disabled?: boolean
  loading?: boolean
  ariaLabel?: string
}

withDefaults(defineProps<AppButtonProps>(), {
  variant: 'primary',
  size: 'md',
  tag: 'button',
  disabled: false,
  loading: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()
</script>

<template>
  <component
    :is="tag"
    :href="tag === 'a' ? (to || href) : undefined"
    :disabled="disabled || loading || undefined"
    :aria-label="ariaLabel"
    :aria-busy="loading"
    :class="['btn', `btn-${variant}`]"
    @click="emit('click', $event)"
  >
    <span v-if="loading" class="btn-spinner" aria-hidden="true" />
    <slot name="icon-left" />
    <slot />
    <slot name="icon-right">
      <svg
        v-if="variant !== 'icon'"
        class="arrow"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
      >
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </slot>
  </component>
</template>

<style scoped>
.btn-spinner {
  width: 14px;
  height: 14px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.btn:focus-visible {
  outline: 2px solid var(--clay);
  outline-offset: 2px;
}

/* Size overrides */
.btn-sm { padding: 10px 18px; font-size: 13px; }

/* Quiz variant */
.btn-quiz {
  background: #FBF7F1; color: var(--clay-deep);
}
.btn-quiz:hover { background: var(--ink); color: #FBF7F1; }

/* Icon variant */
.btn-icon {
  width: 40px; height: 40px; padding: 0; border-radius: 50%;
  display: inline-flex; align-items: center; justify-content: center;
  color: var(--ink); transition: background .25s var(--ease);
}
.btn-icon:hover { background: rgba(26,26,26,0.06); }
.btn-icon svg { width: 18px; height: 18px; }
</style>
