<script setup lang="ts">
import HeroSection from '~/components/hero/HeroSection.vue'
import CategoriesSection from '~/components/categories/CategoriesSection.vue'
import BestSellerFeature from '~/components/product/BestSellerFeature.vue'
import ProductGrid from '~/components/product/ProductGrid.vue'
import RitualSection from '~/components/ritual/RitualSection.vue'
import EditorialSection from '~/components/editorial/EditorialSection.vue'
import QuizBanner from '~/components/quiz/QuizBanner.vue'
import ReviewsSection from '~/components/reviews/ReviewsSection.vue'
import CategoryProductsSection from '~/components/global/CategoryProductsSection.vue'
import { categories } from '~/data/categories'
import { bestSellerProduct, products, allProducts } from '~/data/products'
import { ritualSteps } from '~/data/ritual'
import { reviews } from '~/data/reviews'

const hairProducts = allProducts.filter((p) => p.category === 'Cuidado Capilar')
const vitaminProducts = allProducts.filter((p) => p.category === 'Vitaminas')
</script>

<template>
  <div class="landing">
    <HeroSection />
    <CategoriesSection :categories="categories" />
    <BestSellerFeature v-if="bestSellerProduct" :product="bestSellerProduct" />
    <ProductGrid :products="products" />
    <RitualSection :steps="ritualSteps" />
    <CategoryProductsSection
      section-id="hair"
      eyebrow="Cuidado Capilar"
      title-before="Fortalece tu "
      title-em="cabello"
      title-after=" desde la raíz"
      intro="Fórmulas clínicas con biotina, péptidos y extractos botánicos para un cabello más fuerte, denso y saludable — sin residuos grasos."
      :products="hairProducts"
      view-all-link="/shop?category=Cuidado+Capilar"
    />
    <CategoryProductsSection
      section-id="vitamins"
      eyebrow="Vitaminas de Belleza"
      title-before="Nutrición que se "
      title-em="ve"
      title-after=" por fuera"
      intro="Suplementos con colágeno, biotina y complejos patentados que actúan desde el interior para una piel radiante, cabello fuerte y uñas saludables."
      :products="vitaminProducts"
      view-all-link="/shop?category=Vitaminas"
    />
    <EditorialSection />
    <QuizBanner />
    <ReviewsSection :reviews="reviews" />
  </div>
</template>

<style scoped>
.landing {
  /* Hero has padding-top: 76px built in via .hero class */
}
</style>
