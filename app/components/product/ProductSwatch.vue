<script setup lang="ts">
import type { Swatch } from '~/types'

interface ProductSwatchProps {
  swatches: Swatch[]
  modelValue?: string
}

const props = withDefaults(defineProps<ProductSwatchProps>(), {
  modelValue: '',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const selected = ref(props.modelValue || props.swatches[0]?.label || '')
</script>

<template>
  <div class="swatch-row" role="group" aria-label="Choose shade">
    <span
      v-for="s in swatches"
      :key="s.label"
      :title="s.label"
      class="swatch"
      :class="{ active: selected === s.label }"
      :style="{ background: s.color }"
      @click="selected = s.label; emit('update:modelValue', s.label)"
    />
  </div>
</template>

<style scoped>
.swatch-row {
  display: flex; gap: 10px; padding: 10px 14px;
  background: rgba(250,247,242,0.85); backdrop-filter: blur(8px);
  border-radius: 999px;
}
.swatch {
  width: 22px; height: 22px; border-radius: 50%;
  border: 1.5px solid rgba(26,26,26,0.15);
  cursor: pointer; transition: transform .2s var(--ease);
}
.swatch:hover { transform: scale(1.1); }
.swatch.active {
  border-color: var(--ink);
  box-shadow: 0 0 0 2px var(--bone);
}
</style>
