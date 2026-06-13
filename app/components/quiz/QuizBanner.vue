<script setup lang="ts">
const pills = [
  'Piel sensible',
  'Acné hormonal',
  'Caída del cabello',
  'Falta de brillo',
  'Envejecimiento',
]
</script>

<template>
  <section class="section" id="quiz">
    <div class="container">
      <RevealWrapper>
        <div class="quiz">
          <div>
            <span class="eyebrow" style="color:rgba(251,247,241,0.85)">
              <span class="dot" style="background:#FBF7F1" />
              90 segundos · Personalizado
            </span>
            <h2 class="h-section" style="margin-top:18px;">
              Encuentra tu <em>ritual</em>.
            </h2>
            <p>
              Responde unas preguntas rápidas sobre tu piel, cabello y objetivos.
              Te recomendaremos una rutina personalizada de adentro hacia afuera — y 10% de descuento en tu primer pedido.
            </p>
            <div class="pill-group">
              <span v-for="pill in pills" :key="pill" class="pill">{{ pill }}</span>
            </div>
            <a href="#" class="btn btn-quiz">
              Hacer el Test de Piel
              <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                <path d="M5 12h14M13 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          <div class="quiz-visual">
            <img src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1200&q=80" alt="A curated set of beauty products arranged on a soft surface" loading="lazy">
          </div>
        </div>
      </RevealWrapper>
    </div>
  </section>
</template>

<style scoped>
.quiz {
  background: var(--clay); color: #FBF7F1;
  border-radius: var(--radius-lg);
  padding: clamp(2.5rem, 5vw, 4.5rem);
  display: grid; grid-template-columns: 1.4fr 1fr; gap: 3rem;
  align-items: center; overflow: hidden;
  position: relative;
}
.quiz::before {
  content: ""; position: absolute; right: -80px; top: -80px;
  width: 360px; height: 360px; border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.18), transparent 70%);
  pointer-events: none;
}
.quiz h2 { color: #FBF7F1; max-width: 14ch; }
.quiz h2 em { color: #FBF7F1; font-style: italic; }
.quiz p { color: rgba(251,247,241,0.85); margin-top: 1.25rem; max-width: 50ch; font-size: 16px; }
.quiz .pill-group { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 1.5rem; }
.quiz .pill {
  padding: 6px 14px; border-radius: 999px; border: 1px solid rgba(251,247,241,0.4);
  font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase;
}
.quiz-visual { position: relative; }
.quiz-visual img {
  width: 100%; height: 100%; aspect-ratio: 1/1; object-fit: cover;
  border-radius: var(--radius);
}
@media (max-width: 920px) {
  .quiz { grid-template-columns: 1fr; padding: 2rem; }
}
</style>
