<script setup lang="ts">
import ProductSwatch from '~/components/product/ProductSwatch.vue'
import ProductPrice from '~/components/product/ProductPrice.vue'
import type { Product } from '~/types'

interface BestSellerFeatureProps {
  product: Product
}

const props = defineProps<BestSellerFeatureProps>()

const { addItem, openCart } = useCart()

function handleAddToRitual() {
  if (!props.product) return
  addItem(props.product)
  openCart()
}
</script>

<template>
  <section class="section" id="shop" style="padding-top:0;">
    <div class="container bestseller">
      <RevealWrapper :delay="0">
        <div class="bs-media">
          <span v-if="product.badge" class="badge">★ {{ product.badge }}</span>
          <img :src="product.image" :alt="product.name" loading="lazy">
          <ProductSwatch
            v-if="product.swatches"
            :swatches="product.swatches"
          />
        </div>
      </RevealWrapper>

      <RevealWrapper :delay="1">
        <div class="bs-copy">
          <AppEyebrow>No.1 — El Inicio del Ritual</AppEyebrow>
          <h2 class="h-section" style="margin-top:18px;">
            The Glow <em>Serum</em>.
          </h2>
          <p class="desc">
            Un sérum ligero de vitamina C + niacinamida + escualano que
            ilumina, hidrata y unifica visiblemente el tono en 14 días.
            Dosis clínica. Clínicamente amado.
          </p>

          <div class="bs-meta">
            <div class="stat"><span class="n">14<sup style="font-size:18px">d</sup></span><span class="l">Brillo visible</span></div>
            <div class="stat"><span class="n">96<span style="font-size:18px">%</span></span><span class="l">Vio piel más luminosa</span></div>
            <div class="stat"><span class="n">0</span><span class="l">Fragancias · sulfatos · parabenos</span></div>
          </div>

          <ProductPrice :price="product.price" :compare-at-price="product.compareAtPrice" />

          <div class="bs-cta">
            <button class="btn btn-primary" @click="handleAddToRitual">
              Agregar al Ritual — ${{ product.price }}
              <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                <path d="M5 12h14M13 5l7 7-7 7"/>
              </svg>
            </button>
            <a :href="`/shop/${product.id}`" class="btn btn-ghost">Ver todos los ingredientes</a>
          </div>

          <StarRating
            v-if="product.rating && product.reviewCount"
            :rating="product.rating"
            :count="product.reviewCount"
            show-count
          />
        </div>
      </RevealWrapper>
    </div>
  </section>
</template>

<style scoped>
.bestseller {
  display: grid; grid-template-columns: 1.05fr 1fr;
  gap: clamp(2rem, 5vw, 5rem); align-items: center;
}
.bs-media {
  position: relative; aspect-ratio: 4/5; overflow: hidden;
  border-radius: var(--radius-lg);
  background: var(--bone-2);
}
.bs-media img {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform 1.2s var(--ease);
}
.bestseller:hover .bs-media img { transform: scale(1.04); }
.bs-media .badge {
  position: absolute; top: 20px; left: 20px;
  background: var(--bone); color: var(--ink);
  font-size: 11px; font-weight: 500; letter-spacing: 0.18em;
  text-transform: uppercase; padding: 8px 14px; border-radius: 999px;
  z-index: 2;
}
.bs-media :deep(.swatch-row) {
  position: absolute; bottom: 20px; left: 20px;
}

.bs-copy .desc {
  color: var(--ink-soft); font-size: 16px; margin-top: 1.5rem;
  max-width: 50ch; line-height: 1.65;
}

.bs-meta {
  display: flex; gap: 28px; margin-top: 1.75rem;
  flex-wrap: wrap;
}
.bs-meta .stat { display: flex; flex-direction: column; }
.bs-meta .stat .n {
  font-family: var(--serif); font-size: 30px; line-height: 1; color: var(--clay);
}
.bs-meta .stat .l {
  font-size: 12px; color: var(--muted); margin-top: 4px;
  letter-spacing: 0.04em;
}

.bs-cta { display: flex; gap: 12px; margin-top: 1.75rem; flex-wrap: wrap; }

@media (max-width: 920px) {
  .bestseller { grid-template-columns: 1fr; }
}
</style>
