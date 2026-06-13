<script setup lang="ts">
import type { CategoryItem } from '~/types'

interface CategoryCardProps {
  category: CategoryItem
  delay?: number
}

withDefaults(defineProps<CategoryCardProps>(), {
  delay: 1,
})
</script>

<template>
  <RevealWrapper :delay="(delay as 1 | 2 | 3 | 4 | 5)">
    <a class="cat-card" :href="category.link">
      <img :src="category.image" :alt="category.title" loading="lazy">
      <div class="cat-card-body">
        <h3 class="h-card">{{ category.title }}</h3>
        <p>{{ category.description }}</p>
        <span class="cat-link">Comprar {{ category.title }} <span class="arrow">→</span></span>
      </div>
    </a>
  </RevealWrapper>
</template>

<style scoped>
.cat-card {
  position: relative; overflow: hidden; border-radius: var(--radius-lg);
  background: var(--bone-2); aspect-ratio: 3/4;
  display: flex; flex-direction: column; justify-content: flex-end;
  cursor: pointer; transition: transform .6s var(--ease);
}
.cat-card:hover { transform: translateY(-4px); }
.cat-card img {
  position: absolute; inset: 0; width: 100%; height: 100%;
  object-fit: cover; transition: transform 1.2s var(--ease);
}
.cat-card:hover img { transform: scale(1.06); }
.cat-card::after {
  content: ""; position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(26,26,26,0) 40%, rgba(26,26,26,0.55) 100%);
}
.cat-card-body {
  position: relative; z-index: 2; color: #FBF7F1;
  padding: 28px;
}
.cat-card-body h3 { color: #FBF7F1; }
.cat-card-body p {
  font-size: 14px; margin-top: 6px; opacity: .85; max-width: 26ch;
}
.cat-link {
  display: inline-flex; align-items: center; gap: 8px;
  margin-top: 14px; font-size: 13px; font-weight: 500;
  letter-spacing: 0.08em; text-transform: uppercase;
  color: #FBF7F1;
}
.cat-link .arrow { transition: transform .35s var(--ease); }
.cat-card:hover .cat-link .arrow { transform: translateX(6px); }
</style>
