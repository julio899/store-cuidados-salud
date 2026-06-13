export function useStickyHeader() {
  const isScrolled = ref(false)

  function onScroll() {
    isScrolled.value = window.scrollY > 12
  }

  onMounted(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return { isScrolled }
}
