<script setup lang="ts">
import { changeLocale } from '@formkit/vue'

const { locale } = useI18n()
const head = useLocaleHead()

useHead(() => ({
  htmlAttrs: { lang: head.value.htmlAttrs.lang, dir: head.value.htmlAttrs.dir },
  link: head.value.link,
  meta: head.value.meta
}))

// Keep FormKit's validation messages in the active language
watch(locale, value => changeLocale(value), { immediate: true })
</script>

<template>
  <div class="mx-auto min-h-screen max-w-page border-x border-line bg-white">
    <a
      href="#main"
      class="sr-only left-4 top-4 z-50 bg-ink px-4 py-2 text-surface focus:not-sr-only focus:absolute"
    >
      {{ $t('skipLink') }}
    </a>
    <AppHeader />
    <main id="main" tabindex="-1" class="focus:outline-none">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
