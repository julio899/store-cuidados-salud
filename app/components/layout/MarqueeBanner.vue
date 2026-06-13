<script setup lang="ts">
interface MarqueeBannerProps {
  items?: string[]
}

withDefaults(defineProps<MarqueeBannerProps>(), {
  items: () => [
    'Free shipping over $50',
    'Dermatologist-tested',
    'Cruelty-free & vegan',
    'Made in France',
    '30-day glow guarantee',
    'Subscribe & save 15%',
  ],
})
</script>

<template>
  <div class="hero-marquee" aria-hidden="true">
    <div class="marquee-track">
      <span v-for="(item, i) in items" :key="i">{{ item }}</span>
      <!-- Duplicated for seamless loop -->
      <span v-for="(item, i) in items" :key="`dup-${i}`">{{ item }}</span>
    </div>
  </div>
</template>

<style scoped>
.hero-marquee {
  position: absolute; left: 0; right: 0; bottom: 0; z-index: 3;
  background: var(--ink); color: var(--bone);
  overflow: hidden; padding: 14px 0;
  border-top: 1px solid rgba(255,255,255,0.08);
}
.marquee-track {
  display: flex; gap: 56px; white-space: nowrap;
  animation: scroll 38s linear infinite;
  width: max-content;
}
.marquee-track span {
  font-family: var(--serif); font-size: 16px; font-style: italic; font-weight: 400;
  color: var(--bone);
  display: inline-flex; align-items: center; gap: 56px;
}
.marquee-track span::after {
  content: "✦"; color: var(--clay); font-style: normal; font-size: 12px;
}
</style>
