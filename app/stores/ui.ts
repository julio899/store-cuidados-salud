import { defineStore } from 'pinia'

interface UIState {
  mobileMenuOpen: boolean
  activeFilter: string | null
}

const STORAGE_KEY = 'pielstore-ui'

function loadState(): UIState {
  if (import.meta.server) return { mobileMenuOpen: false, activeFilter: null }
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return { mobileMenuOpen: false, activeFilter: null }
}

function saveState(state: UIState) {
  if (import.meta.server) return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {}
}

export const useUIStore = defineStore('ui', () => {
  const initial = loadState()
  const mobileMenuOpen = ref(initial.mobileMenuOpen)
  const activeFilter = ref<string | null>(initial.activeFilter)

  function toggleMobileMenu() {
    mobileMenuOpen.value = !mobileMenuOpen.value
    persist()
  }

  function setActiveFilter(filter: string | null) {
    activeFilter.value = filter
    persist()
  }

  function persist() {
    saveState({
      mobileMenuOpen: mobileMenuOpen.value,
      activeFilter: activeFilter.value,
    })
  }

  return {
    mobileMenuOpen,
    activeFilter,
    toggleMobileMenu,
    setActiveFilter,
  }
})
