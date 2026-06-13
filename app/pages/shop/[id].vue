<script setup lang="ts">
import ProductSwatch from '~/components/product/ProductSwatch.vue'
import ProductPrice from '~/components/product/ProductPrice.vue'
import { getProductById, allProducts } from '~/data/products'

const route = useRoute()
const productId = computed(() => route.params.id as string)
const product = computed(() => getProductById(productId.value))

const { addItem, openCart } = useCart()
const quantity = ref(1)
const added = ref(false)

function handleAdd() {
  if (!product.value) return
  addItem(product.value, quantity.value)
  added.value = true
  setTimeout(() => { added.value = false }, 1500)
}

const relatedProducts = computed(() =>
  allProducts
    .filter((p) => p.id !== productId.value && p.category === product.value?.category)
    .slice(0, 4),
)
</script>

<template>
  <div class="pdp">
    <!-- Not found -->
    <section v-if="!product" class="section">
      <div class="container" style="text-align:center; padding-top:120px;">
        <h1 class="h-section">Producto no encontrado</h1>
        <a href="/shop" class="btn btn-ghost" style="margin-top:24px;">Volver a la Tienda</a>
      </div>
    </section>

    <!-- Product Detail -->
    <template v-else>
      <section class="section pdp-main" style="padding-top:120px;">
        <div class="container pdp-grid">
          <!-- Images -->
          <div class="pdp-images">
            <img
              :src="product.image"
              :alt="product.name"
              class="pdp-main-img"
            >
            <div v-if="product.images && product.images.length > 1" class="pdp-thumbs">
              <img
                v-for="(img, i) in product.images"
                :key="i"
                :src="img"
                :alt="`${product.name} view ${i + 1}`"
                class="pdp-thumb"
              >
            </div>
            <ProductSwatch
              v-if="product.swatches"
              :swatches="product.swatches"
            />
          </div>

          <!-- Info -->
          <div class="pdp-info">
            <span v-if="product.badge" class="pdp-badge">{{ product.badge }}</span>
            <span class="pdp-cat">{{ product.category }}</span>
            <h1 class="h-section" style="margin-top:12px;">
              {{ product.name }}
            </h1>

            <StarRating
              v-if="product.rating"
              :rating="product.rating"
              :count="product.reviewCount"
              show-count
              style="margin-top:14px;"
            />

            <p class="pdp-desc">{{ product.description }}</p>

            <ProductPrice
              :price="product.price"
              :compare-at-price="product.compareAtPrice"
              style="margin-top:0;"
            />

            <!-- Features -->
            <ul v-if="product.features" class="pdp-features">
              <li v-for="(feat, i) in product.features" :key="i">
                {{ feat }}
              </li>
            </ul>

            <!-- Actions -->
            <div class="pdp-actions">
              <div class="qty-selector">
                <button aria-label="Disminuir cantidad" @click="quantity = Math.max(1, quantity - 1)">−</button>
                <span>{{ quantity }}</span>
                <button aria-label="Aumentar cantidad" @click="quantity = quantity + 1">+</button>
              </div>
              <button class="btn btn-primary pdp-add-btn" :class="{ added }" :disabled="!product.inStock" @click="handleAdd">
                <template v-if="!product.inStock">Agotado</template>
                <template v-else-if="added">✓ Agregado al Carrito</template>
                <template v-else>Agregar al Carrito — ${{ (product.price * quantity).toFixed(2) }}</template>
              </button>
            </div>

            <!-- How to use -->
            <div v-if="product.howToUse" class="pdp-usage">
              <h4>Modo de Uso</h4>
              <p>{{ product.howToUse }}</p>
            </div>

            <!-- Ingredients -->
            <div v-if="product.ingredients" class="pdp-usage">
              <h4>Ingredientes Clave</h4>
              <p>{{ product.ingredients }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Related products -->
      <section v-if="relatedProducts.length > 0" class="section" style="padding-top:0;">
        <div class="container">
          <SectionHead>
            <template #eyebrow>
              <AppEyebrow>También te puede gustar</AppEyebrow>
            </template>
            <template #title>
              <h2 class="h-section" style="margin-top:18px;">
                Más <em>{{ product.category }}</em>.
              </h2>
            </template>
          </SectionHead>

          <div class="related-grid">
            <ProductCard
              v-for="(rp, i) in relatedProducts"
              :key="rp.id"
              :product="rp"
              :delay="(i + 1) as 1 | 2 | 3 | 4"
            />
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<style scoped>
.pdp-main { padding-bottom: 0; }
.pdp-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 6vw, 5rem);
  align-items: start;
}

.pdp-main-img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: var(--radius-lg);
  background: var(--bone-2);
}
.pdp-thumbs {
  display: flex;
  gap: 10px;
  margin-top: 14px;
}
.pdp-thumb {
  width: 72px;
  height: 72px;
  object-fit: cover;
  border-radius: var(--radius);
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color .2s var(--ease);
}
.pdp-thumb:hover {
  border-color: var(--clay);
}

.pdp-info {
  display: flex;
  flex-direction: column;
}
.pdp-badge {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 999px;
  background: var(--bone-2);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--clay);
  margin-bottom: 8px;
  width: fit-content;
}
.pdp-cat {
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
  font-weight: 500;
}
.pdp-desc {
  font-size: 16px;
  color: var(--ink-soft);
  line-height: 1.7;
  margin-top: 1.5rem;
}

.pdp-features {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.pdp-features li {
  font-size: 14px;
  color: var(--ink-soft);
  padding-left: 22px;
  position: relative;
}
.pdp-features li::before {
  content: "•";
  position: absolute;
  left: 6px;
  color: var(--clay);
  font-weight: 600;
}

.pdp-actions {
  display: flex;
  gap: 12px;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.qty-selector {
  display: flex;
  align-items: center;
  border: 1px solid var(--bone-3);
  border-radius: 999px;
  overflow: hidden;
}
.qty-selector button {
  width: 44px;
  height: 48px;
  font-size: 18px;
  color: var(--ink);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background .2s var(--ease);
}
.qty-selector button:hover {
  background: var(--bone-2);
}
.qty-selector span {
  width: 40px;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
}

.pdp-add-btn {
  flex: 1;
  justify-content: center;
  padding: 16px 28px;
}
.pdp-add-btn.added {
  background: var(--sage);
}
.pdp-add-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pdp-usage {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--line);
}
.pdp-usage h4 {
  font-family: var(--sans);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink);
  margin-bottom: 8px;
}
.pdp-usage p {
  font-size: 14px;
  color: var(--ink-soft);
  line-height: 1.65;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}

@media (max-width: 920px) {
  .pdp-grid { grid-template-columns: 1fr; }
  .related-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
}
</style>
