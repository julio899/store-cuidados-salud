<script setup lang="ts">
import HeaderMain from '~/components/layout/HeaderMain.vue'
import FooterMain from '~/components/layout/FooterMain.vue'
</script>

<template>
  <div>
    <a href="#main-content" class="skip-link">Saltar al contenido principal</a>
    <HeaderMain />
    <main id="main-content">
      <slot />
    </main>
    <FooterMain />
  </div>
</template>

<style scoped>
.skip-link {
  position: absolute; top: -100%; left: 16px;
  background: var(--clay); color: #FBF7F1;
  padding: 8px 16px; border-radius: 999px;
  font-family: var(--sans); font-size: 13px; font-weight: 500;
  z-index: 200;
}
.skip-link:focus {
  top: 8px;
}
</style>
