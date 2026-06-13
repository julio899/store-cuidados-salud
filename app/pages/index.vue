<script setup lang="ts">
import HeroSection from '~/components/hero/HeroSection.vue'
import CategoriesSection from '~/components/categories/CategoriesSection.vue'
import BestSellerFeature from '~/components/product/BestSellerFeature.vue'
import ProductGrid from '~/components/product/ProductGrid.vue'
import RitualSection from '~/components/ritual/RitualSection.vue'
import EditorialSection from '~/components/editorial/EditorialSection.vue'
import QuizBanner from '~/components/quiz/QuizBanner.vue'
import { categories } from '~/data/categories'
import { bestSellerProduct, products } from '~/data/products'
import ReviewsSection from '~/components/reviews/ReviewsSection.vue'
import { ritualSteps } from '~/data/ritual'
import { reviews } from '~/data/reviews'
</script>

<template>
  <div class="landing">
    <HeroSection />
    <CategoriesSection :categories="categories" />
    <BestSellerFeature :product="bestSellerProduct" />
    <ProductGrid :products="products" />
    <RitualSection :steps="ritualSteps" />
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
