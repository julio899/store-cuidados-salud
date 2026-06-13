<script setup lang="ts">
import type { RitualStep as RitualStepType } from '~/types'

interface RitualStepProps {
  step: RitualStepType
  delay?: number
}

withDefaults(defineProps<RitualStepProps>(), {
  delay: 1,
})
</script>

<template>
  <RevealWrapper :delay="(delay as 1 | 2 | 3)">
    <article class="step">
      <div class="num">{{ String(step.number).padStart(2, '0') }}</div>
      <h4>{{ step.title }}</h4>
      <p>{{ step.description }}</p>
      <div class="step-img">
        <img :src="step.image" :alt="step.title" loading="lazy">
      </div>
    </article>
  </RevealWrapper>
</template>

<style scoped>
.step {
  background: var(--bone); border-radius: var(--radius-lg);
  padding: 36px 32px; position: relative; overflow: hidden;
  transition: transform .5s var(--ease), box-shadow .5s var(--ease);
}
.step:hover { transform: translateY(-4px); box-shadow: 0 24px 48px -28px rgba(26,26,26,0.18); }
.step .num {
  font-family: var(--serif); font-style: italic;
  font-size: 56px; color: var(--clay); line-height: 1;
}
.step h4 { margin-top: 20px; font-size: 26px; }
.step p {
  margin-top: 10px; color: var(--ink-soft); font-size: 14.5px; line-height: 1.65;
}
.step .step-img {
  margin-top: 24px; aspect-ratio: 4/3; border-radius: var(--radius);
  overflow: hidden; background: var(--bone-2);
}
.step .step-img img { width: 100%; height: 100%; object-fit: cover; }
</style>
