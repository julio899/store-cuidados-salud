<script setup lang="ts">
import RitualStep from '~/components/ritual/RitualStep.vue'
import type { RitualStep as RitualStepType } from '~/types'

interface RitualSectionProps {
  steps: RitualStepType[]
}

defineProps<RitualSectionProps>()
</script>

<template>
  <section class="section ritual" id="ritual">
    <div class="container">
      <SectionHead centered>
        <template #eyebrow>
          <AppEyebrow centered>El Ritual de Tres Pasos</AppEyebrow>
        </template>
        <template #title>
          <h2 class="h-section" style="margin-top:18px;">
            Por fuera. Desde <em>adentro</em>.
          </h2>
        </template>
        <template #intro>
          Un protocolo simple de mañana y noche construido sobre tres pilares —
          diseñado para superponerse, no para complicarse.
        </template>
      </SectionHead>

      <div class="ritual-grid">
        <RitualStep
          v-for="(step, i) in steps"
          :key="step.number"
          :step="step"
          :delay="(i + 1) as 1 | 2 | 3"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.ritual {
  background: var(--bone-2);
  border-top: 1px solid var(--bone-3);
  border-bottom: 1px solid var(--bone-3);
}
.ritual-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: clamp(1.5rem, 3vw, 2.5rem); margin-top: clamp(2.5rem, 5vw, 4rem);
}
@media (max-width: 920px) {
  .ritual-grid { grid-template-columns: 1fr; }
}
</style>
