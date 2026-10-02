<script setup lang="ts">
const links = ['process', 'work', 'about', 'contact'] as const

const scrolled = ref(false)
const menuOpen = ref(false)
const toggleRef = ref<HTMLButtonElement>()

function onScroll() {
  scrolled.value = window.scrollY > 8
}

function closeMenu(returnFocus = false) {
  if (!menuOpen.value) return
  menuOpen.value = false
  if (returnFocus) toggleRef.value?.focus()
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeMenu(true)
}

// The mobile menu doesn't exist at md and up; close it when the viewport grows
let desktopQuery: MediaQueryList | undefined

function onBreakpoint(event: MediaQueryListEvent) {
  if (event.matches) closeMenu()
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
  desktopQuery = window.matchMedia('(min-width: 768px)')
  desktopQuery.addEventListener('change', onBreakpoint)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  desktopQuery?.removeEventListener('change', onBreakpoint)
})
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-300"
    :class="menuOpen
      ? 'border-line bg-white shadow-[0_8px_24px_rgba(31,30,28,0.08)]'
      : scrolled
        ? 'glass border-line/80 shadow-[0_1px_12px_rgba(31,30,28,0.06)]'
        : 'border-line bg-white'"
  >
    <div class="flex items-center justify-between gap-4 px-4 py-4 sm:px-8 sm:py-5">
      <SiteLogo />

      <div class="hidden items-center gap-6 md:flex">
        <nav :aria-label="$t('nav.label')">
          <ul class="m-0 flex list-none flex-wrap gap-6 p-0 text-[15px]">
            <li v-for="id in links" :key="id">
              <a :href="`#${id}`">{{ $t(`nav.${id}`) }}</a>
            </li>
          </ul>
        </nav>
        <LangSwitcher />
      </div>

      <button
        ref="toggleRef"
        type="button"
        class="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        @click="menuOpen = !menuOpen"
      >
        <span class="sr-only">{{ $t('nav.menu') }}</span>
        <span class="relative block h-3.5 w-5" aria-hidden="true">
          <span
            class="absolute left-0 h-0.5 w-5 bg-ink transition-transform duration-200"
            :class="menuOpen ? 'top-1.5 rotate-45' : 'top-0'"
          />
          <span
            class="absolute left-0 top-1.5 h-0.5 w-5 bg-ink transition-opacity duration-200"
            :class="menuOpen ? 'opacity-0' : 'opacity-100'"
          />
          <span
            class="absolute left-0 h-0.5 w-5 bg-ink transition-transform duration-200"
            :class="menuOpen ? 'top-1.5 -rotate-45' : 'top-3'"
          />
        </span>
      </button>
    </div>

    <div
      v-show="menuOpen"
      id="mobile-menu"
      class="border-t border-line/80 px-4 pb-5 pt-2 md:hidden"
    >
      <nav :aria-label="$t('nav.label')">
        <ul class="m-0 list-none p-0 text-lg">
          <li v-for="id in links" :key="id" class="border-b border-line-soft last:border-b-0">
            <a :href="`#${id}`" class="block py-3 no-underline" @click="closeMenu()">
              {{ $t(`nav.${id}`) }}
            </a>
          </li>
        </ul>
      </nav>
      <div class="mt-4">
        <LangSwitcher />
      </div>
    </div>
  </header>
</template>
