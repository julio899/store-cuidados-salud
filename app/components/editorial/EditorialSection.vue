<script setup lang="ts">
const stats = [
  { value: '92%', label: 'Usuarios vieron resultados en 14 días' },
  { value: '0', label: 'Ingredientes de origen animal' },
  { value: '17', label: 'Complejos activos patentados' },
]
</script>

<template>
  <section class="editorial" id="about">
    <div class="editorial-img">
      <img src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=1400&q=80" alt="Close up portrait of dewy, glowing skin with soft natural light" loading="lazy">
    </div>
    <div class="editorial-copy">
      <span class="eyebrow" style="color:var(--blush)"><span class="dot" style="background:var(--blush)" /> Nuestra Filosofía</span>
      <h2 class="h-section" style="margin-top:18px;">
        La belleza es un <em style="color:var(--blush)">sistema</em>, no un atajo.
      </h2>
      <p>
        Cada fórmula de PielStore se basa en tres compromisos: activos clínicos
        en concentraciones reales, abastecimiento transparente de
        pequeños laboratorios franceses e italianos, y rutinas que respetan
        tanto tu piel como tu tiempo. Sin esquemas de diez pasos.
        Sin greenwashing. Solo cosas que funcionan — juntas.
      </p>

      <div class="editorial-stats">
        <div v-for="(stat, i) in stats" :key="i" class="stat">
          <div class="n">{{ stat.value }}</div>
          <div class="l">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.editorial {
  display: grid; grid-template-columns: 1fr 1fr;
  align-items: stretch; gap: 0;
}
.editorial-img { aspect-ratio: 4/5; overflow: hidden; }
.editorial-img img { width: 100%; height: 100%; object-fit: cover; }
.editorial-copy {
  background: var(--ink); color: var(--bone);
  padding: clamp(3rem, 6vw, 5rem);
  display: flex; flex-direction: column; justify-content: center;
}
.editorial-copy h2 { color: var(--bone); max-width: 14ch; }
.editorial-copy p {
  color: rgba(250,247,242,0.78); margin-top: 1.5rem;
  max-width: 44ch; font-size: 16px; line-height: 1.7;
}
.editorial-stats {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 20px; margin-top: 2.5rem;
  padding-top: 2.5rem; border-top: 1px solid rgba(250,247,242,0.12);
}
.editorial-stats .stat .n {
  font-family: var(--serif); font-size: 36px; color: var(--blush);
}
.editorial-stats .stat .l {
  font-size: 12px; color: rgba(250,247,242,0.6);
  margin-top: 4px; letter-spacing: 0.06em;
}
@media (max-width: 920px) {
  .editorial { grid-template-columns: 1fr; }
}
</style>
