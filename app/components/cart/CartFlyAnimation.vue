<script setup lang="ts">
const { flyProduct, clearFlyProduct } = useCart()

const flyImg = ref('')
const style = reactive({ left: '0px', top: '0px', width: '0px', height: '0px' })
const endStyle = reactive({ left: '0px', top: '0px', width: '0px', height: '0px' })
const phase = ref<'start' | 'fly' | 'done'>('done')

watch(
  () => flyProduct.value,
  (fp) => {
    if (!fp) return
    flyImg.value = fp.image

    const src = fp.srcRect
    style.left = `${src.left}px`
    style.top = `${src.top}px`
    style.width = `${src.width}px`
    style.height = `${src.height}px`

    const cartBtn = document.querySelector<HTMLElement>('[data-cart-target]')
    if (cartBtn) {
      const dest = cartBtn.getBoundingClientRect()
      endStyle.left = `${dest.left + dest.width / 2 - 20}px`
      endStyle.top = `${dest.top + dest.height / 2 - 20}px`
    } else {
      endStyle.left = `${window.innerWidth - 140}px`
      endStyle.top = '24px'
    }
    endStyle.width = '40px'
    endStyle.height = '40px'

    phase.value = 'start'
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        phase.value = 'fly'
      })
    })
  },
)

function onTransitionEnd() {
  if (phase.value === 'fly') {
    phase.value = 'done'
    clearFlyProduct()
  }
}
</script>

<template>
  <div
    v-if="phase !== 'done'"
    class="fly-clone"
    :class="phase"
    :style="phase === 'fly' ? endStyle : style"
    @transitionend="onTransitionEnd"
  >
    <img :src="flyImg" alt="" draggable="false">
  </div>
</template>

<style scoped>
.fly-clone {
  position: fixed;
  z-index: 300;
  pointer-events: none;
  border-radius: var(--radius-sm);
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(26,26,26,0.18);
}
.fly-clone.start {
  transition: none;
  opacity: 1;
  transform: scale(1);
}
.fly-clone.fly {
  transition: all .55s cubic-bezier(.22, .61, .36, 1);
  opacity: 1;
  transform: scale(1);
}
.fly-clone img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
