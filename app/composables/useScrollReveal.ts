interface ScrollRevealOptions {
  threshold?: number
  rootMargin?: string
}

export function useScrollReveal(
  element: Ref<HTMLElement | undefined>,
  options: ScrollRevealOptions = {},
): { isVisible: Ref<boolean> } {
  const isVisible = ref(false)

  onMounted(() => {
    if (!element.value) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: options.threshold ?? 0.12,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      },
    )

    observer.observe(element.value)

    onUnmounted(() => {
      observer.disconnect()
    })
  })

  return { isVisible }
}
