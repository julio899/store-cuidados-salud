<script setup lang="ts">
import ReviewCard from '~/components/reviews/ReviewCard.vue'
import type { ReviewItem } from '~/types'

interface ReviewsSectionProps {
  reviews: ReviewItem[]
}

defineProps<ReviewsSectionProps>()
</script>

<template>
  <section class="section reviews" id="reviews">
    <div class="container">
      <SectionHead centered>
        <template #eyebrow>
          <AppEyebrow centered>4.9 ★ · 12,000+ Reseñas</AppEyebrow>
        </template>
        <template #title>
          <h2 class="h-section" style="margin-top:18px;">
            Piel real. <em>Rituales</em> reales.
          </h2>
        </template>
      </SectionHead>

      <div class="reviews-grid">
        <ReviewCard
          v-for="(review, i) in reviews"
          :key="review.id"
          :review="review"
          :delay="(i + 1) as 1 | 2 | 3"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.reviews { background: var(--bone-2); border-top: 1px solid var(--bone-3); border-bottom: 1px solid var(--bone-3); }
.reviews-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 24px; margin-top: clamp(2.5rem, 5vw, 4rem);
}
@media (max-width: 920px) { .reviews-grid { grid-template-columns: 1fr; } }
</style>
