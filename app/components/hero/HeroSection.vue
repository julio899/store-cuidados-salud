<script setup lang="ts">
import MarqueeBanner from '~/components/layout/MarqueeBanner.vue'
import { trustBadges } from '~/data/trustBadges'

const marqueeItems = [
  'Envío gratis en pedidos sobre $50',
  'Dermatológicamente probado',
  'Libre de crueldad y vegano',
  'Hecho en Francia',
  'Garantía de brillo en 30 días',
  'Suscríbete y ahorra 15%',
]
</script>

<template>
  <section class="hero">
    <div class="hero-media" aria-hidden="true">
      <img
        src="/img/image_8.avif"
        alt="A model with dewy, glowing skin in soft natural light holding a serum bottle"
        loading="eager"
        fetchpriority="high"
      >
    </div>

    <div class="hero-copy">
      <RevealWrapper :delay="0">
        <AppEyebrow>
          El Ritual de Adentro hacia Afuera
        </AppEyebrow>
      </RevealWrapper>

      <RevealWrapper :delay="1">
        <h1 class="h-display">
          Belleza de adentro<br><em>hacia afuera</em>, respaldada por la ciencia.
        </h1>
      </RevealWrapper>

      <RevealWrapper :delay="2">
        <p class="hero-sub">
          Fórmulas clínicas limpias que actúan sobre tu piel — y nutrientes específicos
          que actúan desde el interior. Un ritual, resplandor total.
        </p>
      </RevealWrapper>

      <RevealWrapper :delay="3">
        <div class="hero-trust">
          <span v-for="(badge, i) in trustBadges" :key="i">{{ badge.label }}</span>
        </div>
      </RevealWrapper>

      <RevealWrapper :delay="4">
        <div class="hero-ctas">
          <a href="/shop" class="btn btn-primary">
            Comprar el Ritual
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#quiz" class="btn btn-ghost">Hacer el Test de Piel</a>
        </div>
      </RevealWrapper>
    </div>

    <MarqueeBanner :items="marqueeItems" />
  </section>
</template>

<style scoped>
/* ============================================================
   HERO
   ============================================================ */
.hero {
  position: relative; min-height: 100vh; min-height: 100svh;
  padding-top: 76px; overflow: hidden;
  display: grid; grid-template-columns: 1.5fr 1fr;
}
.hero-media {
  position: relative; overflow: hidden;
}
.hero-media img {
  width: 100%; height: 100%; object-fit: cover; object-position: center;
  transform: scale(1.05);
  animation: heroZoom 14s var(--ease) forwards;
}
.hero-media::after {
  content: ""; position: absolute; inset: 0;
  background: linear-gradient(90deg, rgba(250,247,242,0) 60%, rgba(250,247,242,0.55) 100%);
  pointer-events: none;
}

.hero-copy {
  display: flex; flex-direction: column; justify-content: center;
  padding: clamp(2rem, 5vw, 4.5rem) clamp(1.5rem, 4vw, 4rem);
  position: relative;
}
.hero-copy h1 { max-width: 13ch; }
.hero-sub {
  font-family: var(--sans); font-size: 16px; color: var(--ink-soft);
  max-width: 36ch; margin-top: 1.5rem; line-height: 1.55;
}
.hero-trust {
  display: flex; flex-wrap: wrap; gap: 14px 20px;
  margin-top: 1.75rem; font-size: 12px; color: var(--ink-soft);
  letter-spacing: 0.04em;
}
.hero-trust span { display: inline-flex; align-items: center; gap: 6px; }
.hero-trust span::before {
  content: ""; width: 4px; height: 4px; border-radius: 50%;
  background: var(--clay);
}
.hero-trust span:first-child::before { display: none; }

.hero-ctas {
  display: flex; gap: 12px; flex-wrap: wrap;
  margin-top: 2.25rem;
}

@media (max-width: 920px) {
  .hero { grid-template-columns: 1fr; }
  .hero-media { min-height: 55vh; }
  .hero-copy { padding: 3rem var(--gutter) 5rem; }
}
</style>
