<script setup lang="ts">
import ProductCard from '~/components/product/ProductCard.vue'
import { allProducts } from '~/data/products'

const ui = useUIStore()

const categories = [...new Set(allProducts.map((p) => p.category))]

const filteredProducts = computed(() =>
  ui.activeFilter
    ? allProducts.filter((p) => p.category === ui.activeFilter)
    : allProducts,
)

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  const catParam = params.get('category')
  if (catParam) {
    ui.setActiveFilter(catParam)
  }
})
</script>

<template>
  <div class="shop-page">
    <!-- Header -->
    <section class="shop-hero">
      <div class="container">
        <RevealWrapper>
          <AppEyebrow>La Colección</AppEyebrow>
          <h1 class="h-display" style="margin-top:16px;">
            Compra <em>el ritual</em>.
          </h1>
          <p class="shop-intro">
            Cada fórmula está construida sobre activos clínicos en concentraciones reales.
            Sin rellenos. Sin falsas promesas. Solo resultados visibles.
          </p>
        </RevealWrapper>
      </div>
    </section>

    <!-- Category filter -->
    <section class="section" style="padding-top:0; padding-bottom:2rem;">
      <div class="container">
        <div class="filter-row">
          <button
            class="filter-pill"
            :class="{ active: ui.activeFilter === null }"
            @click="ui.setActiveFilter(null)"
          >
            Todos
          </button>
          <button
            v-for="cat in categories"
            :key="cat"
            class="filter-pill"
            :class="{ active: ui.activeFilter === cat }"
            @click="ui.setActiveFilter(cat)"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </section>

    <!-- Products grid -->
    <section class="section" style="padding-top:0;">
      <div class="container">
        <div class="shop-grid">
          <ProductCard
            v-for="(product, i) in filteredProducts"
            :key="product.id"
            :product="product"
            :delay="((i % 4) + 1) as 1 | 2 | 3 | 4"
          />
        </div>

        <div v-if="filteredProducts.length === 0" class="empty-state">
          <p>No se encontraron productos en esta categoría.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.shop-page {
  padding-top: 76px;
}

.shop-hero {
  padding: clamp(3rem, 6vw, 6rem) 0 clamp(2rem, 4vw, 3rem);
  background: var(--bone-2);
}

.shop-intro {
  font-size: 16px;
  color: var(--ink-soft);
  max-width: 48ch;
  margin-top: 1.25rem;
  line-height: 1.6;
}

.filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.filter-pill {
  padding: 8px 18px;
  border-radius: 999px;
  border: 1px solid var(--bone-3);
  background: var(--bone);
  font-family: var(--sans);
  font-size: 13px;
  font-weight: 500;
  color: var(--ink-soft);
  cursor: pointer;
  transition: all .25s var(--ease);
}
.filter-pill:hover {
  border-color: var(--clay);
  color: var(--clay);
}
.filter-pill.active {
  background: var(--ink);
  color: var(--bone);
  border-color: var(--ink);
}

.shop-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}

.empty-state {
  text-align: center;
  padding: 4rem 1rem;
  color: var(--muted);
}

@media (max-width: 920px) {
  .shop-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }
}
</style>
