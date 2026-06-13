<script setup lang="ts">
import type { FooterColumn, SocialLink } from '~/types'
import { footerColumns, socialLinks as socialLinksData } from '~/data/footer'

interface FooterMainProps {
  brandDescription?: string
  copyright?: string
}

withDefaults(defineProps<FooterMainProps>(), {
  brandDescription: 'Cuidado premium de la piel, cabello y suplementos de belleza. Elaborado con activos clínicos y botánicos de pequeños lotes — para un brillo que puedes sentir.',
  copyright: '© 2026 PielStore Beauty Co. · Todos los derechos reservados.',
})

const email = ref('')
const subscribed = ref(false)

function handleSubmit() {
  if (!email.value) return
  subscribed.value = true
  email.value = ''
}
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a class="logo" href="#">PielStore</a>
          <p>{{ brandDescription }}</p>
          <form class="footer-newsletter" @submit.prevent="handleSubmit">
            <input
              v-model="email"
              type="email"
              placeholder="Email for 10% off + ritual tips"
              required
            >
            <button type="submit">{{ subscribed ? '✓ Subscribed' : 'Join' }}</button>
          </form>
        </div>

        <div v-for="col in footerColumns" :key="col.title" class="footer-col">
          <h5>{{ col.title }}</h5>
          <ul>
            <li v-for="link in col.links" :key="link.label">
              <a :href="link.to">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>{{ copyright }}</div>
        <div class="socials">
          <!-- Instagram -->
          <a v-if="socialLinksData.find(s => s.platform === 'instagram')" href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/></svg>
          </a>
          <!-- TikTok -->
          <a v-if="socialLinksData.find(s => s.platform === 'tiktok')" href="#" aria-label="TikTok">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4v9.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 4c.5 2.5 2.5 4 5 4"/></svg>
          </a>
          <!-- Pinterest -->
          <a v-if="socialLinksData.find(s => s.platform === 'pinterest')" href="#" aria-label="Pinterest">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M11 8c2 0 4 1.4 4 4 0 2.5-1.6 4-3.5 4-1 0-1.6-.5-1.6-.5L9 21"/></svg>
          </a>
          <!-- YouTube -->
          <a v-if="socialLinksData.find(s => s.platform === 'youtube')" href="#" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="3"/><path d="m10 9 5 3-5 3z" fill="currentColor"/></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* ============================================================
   FOOTER
   ============================================================ */
footer {
  background: var(--ink); color: var(--bone);
  padding: clamp(4rem, 8vw, 6rem) 0 2rem;
}
.footer-top {
  display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 3rem;
  padding-bottom: 3rem; border-bottom: 1px solid rgba(250,247,242,0.1);
}
.footer-brand .logo { color: var(--bone); text-align: left; padding-left: 0; font-family: var(--serif); font-size: 26px; font-weight: 500; letter-spacing: 0.32em; }
.footer-brand p {
  color: rgba(250,247,242,0.65); margin-top: 1rem; max-width: 36ch;
  font-size: 14px; line-height: 1.65;
}
.footer-newsletter { margin-top: 1.5rem; display: flex; gap: 8px; }
.footer-newsletter input {
  flex: 1; padding: 14px 18px; border-radius: 999px;
  border: 1px solid rgba(250,247,242,0.2); background: transparent;
  color: var(--bone); font-family: var(--sans); font-size: 13px;
  outline: none; transition: border-color .25s var(--ease);
}
.footer-newsletter input::placeholder { color: rgba(250,247,242,0.4); }
.footer-newsletter input:focus { border-color: var(--clay); }
.footer-newsletter button {
  background: var(--clay); color: #FBF7F1;
  padding: 0 22px; border-radius: 999px; font-size: 13px; font-weight: 500;
  transition: background .25s var(--ease);
}
.footer-newsletter button:hover { background: var(--clay-deep); }
.footer-col h5 {
  font-family: var(--sans); font-size: 12px; font-weight: 600;
  letter-spacing: 0.2em; text-transform: uppercase; color: var(--bone);
  margin-bottom: 1.25rem;
}
.footer-col ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
.footer-col a { font-size: 14px; color: rgba(250,247,242,0.65); transition: color .2s var(--ease); }
.footer-col a:hover { color: var(--clay); }
.footer-bottom {
  display: flex; justify-content: space-between; align-items: center;
  padding-top: 2rem; flex-wrap: wrap; gap: 1rem;
  font-size: 12px; color: rgba(250,247,242,0.45);
}
.socials { display: flex; gap: 12px; }
.socials a {
  width: 36px; height: 36px; border-radius: 50%;
  border: 1px solid rgba(250,247,242,0.2);
  display: inline-flex; align-items: center; justify-content: center;
  transition: all .25s var(--ease);
}
.socials a:hover { border-color: var(--clay); color: var(--clay); }
.socials svg { width: 14px; height: 14px; }
@media (max-width: 920px) {
  .footer-top { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px) {
  .footer-top { grid-template-columns: 1fr; }
}
</style>
