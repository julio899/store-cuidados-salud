<script setup lang="ts">
import type { ReviewItem } from '~/types'

interface ReviewCardProps {
  review: ReviewItem
  delay?: number
}

withDefaults(defineProps<ReviewCardProps>(), {
  delay: 1,
})
</script>

<template>
  <RevealWrapper :delay="(delay as 1 | 2 | 3)">
    <article class="review">
      <StarRating :rating="review.rating" />
      <blockquote>"{{ review.text }}"</blockquote>
      <div class="who">
        <img class="avatar" :src="review.avatar" :alt="review.author" loading="lazy">
        <div class="who-meta">
          <span class="who-name">{{ review.author }}</span>
          <span class="who-prod">{{ review.verified ? 'Verificado' : '' }} · {{ review.productName }}</span>
        </div>
      </div>
    </article>
  </RevealWrapper>
</template>

<style scoped>
.review {
  background: var(--bone); border-radius: var(--radius-lg);
  padding: 32px; display: flex; flex-direction: column;
  transition: transform .5s var(--ease);
}
.review:hover { transform: translateY(-4px); }
.review blockquote {
  font-family: var(--serif); font-size: 22px; line-height: 1.35;
  color: var(--ink); margin: 20px 0 0; padding: 0;
}
.review .who {
  display: flex; align-items: center; gap: 12px; margin-top: 24px;
  padding-top: 20px; border-top: 1px solid var(--line);
}
.review .avatar {
  width: 44px; height: 44px; border-radius: 50%; object-fit: cover;
}
.review .who-meta { display: flex; flex-direction: column; }
.review .who-name { font-size: 14px; font-weight: 500; }
.review .who-prod { font-size: 12px; color: var(--muted); margin-top: 2px; }
</style>
