<script setup lang="ts">
import ProductCard from '~/components/product/ProductCard.vue'
import type { Product } from '~/types'

interface CategoryProductsSectionProps {
  sectionId: string
  eyebrow: string
  titleBefore: string
  titleEm: string
  titleAfter?: string
  intro?: string
  products: Product[]
  viewAllLink?: string
}

defineProps<CategoryProductsSectionProps>()
</script>

<template>
  <section class="section" :id="sectionId">
    <div class="container">
      <SectionHead>
        <template #eyebrow>
          <AppEyebrow>{{ eyebrow }}</AppEyebrow>
        </template>
        <template #title>
          <h2 class="h-section" style="margin-top:18px;">
            {{ titleBefore }}<em>{{ titleEm }}</em>{{ titleAfter || '.' }}
          </h2>
        </template>
        <template v-if="intro" #intro>
          {{ intro }}
        </template>
        <template v-if="viewAllLink" #action>
          <a :href="viewAllLink" class="btn btn-ghost" style="align-self:end;">
            Ver todos
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </template>
      </SectionHead>

      <div class="products">
        <ProductCard
          v-for="(product, i) in products"
          :key="product.id"
          :product="product"
          :delay="((i % 4) + 1) as 1 | 2 | 3 | 4"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}
@media (max-width: 920px) {
  .products { grid-template-columns: repeat(2, 1fr); gap: 14px; }
}
</style>
