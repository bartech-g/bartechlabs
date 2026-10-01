<script setup lang="ts">
const { locale } = useI18n()

const { data: page } = await useAsyncData(
  () => `home-${locale.value}`,
  () => queryCollection(locale.value === 'hu' ? 'home_hu' : 'home_en').first(),
  { watch: [locale] }
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: () => page.value?.seo.title,
  description: () => page.value?.seo.description,
  ogTitle: () => page.value?.seo.title,
  ogDescription: () => page.value?.seo.description
})
</script>

<template>
  <div v-if="page">
    <HeroSection :hero="page.hero" />
    <ProcessSection :process="page.process" />
    <WorkSection :work="page.work" />
    <AboutSection :about="page.about" />
    <ContactSection :contact="page.contact" />
  </div>
</template>
