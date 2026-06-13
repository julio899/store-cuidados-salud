<script setup lang="ts">
import CategoryCard from '~/components/categories/CategoryCard.vue'
import type { CategoryItem } from '~/types'

interface CategoriesSectionProps {
  categories: CategoryItem[]
}

defineProps<CategoriesSectionProps>()
</script>

<template>
  <section class="section" id="skincare">
    <div class="container">
      <SectionHead>
        <template #eyebrow>
          <AppEyebrow>Comprar por Pilar</AppEyebrow>
        </template>
        <template #title>
          <h2 class="h-section" style="margin-top:18px;">
            Tres formas de <em>irradiar</em>.
          </h2>
        </template>
        <template #intro>
          Cuidado facial específico por fuera. Nutrientes clínicos por dentro.
          Construye una rutina que por fin se sienta como tú.
        </template>
      </SectionHead>

      <div class="categories">
        <CategoryCard
          v-for="(cat, i) in categories"
          :key="cat.link"
          :category="cat"
          :delay="(i + 1) as 1 | 2 | 3"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.categories { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
@media (max-width: 920px) {
  .categories { grid-template-columns: 1fr; gap: 16px; }
}
</style>
