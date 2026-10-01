<script setup lang="ts">
import type { HomeEnCollectionItem } from '@nuxt/content'

defineProps<{ hero: HomeEnCollectionItem['hero'] }>()
</script>

<template>
  <section id="top" aria-labelledby="hero-heading" class="relative border-b border-line bg-surface px-4 sm:px-8 py-14 sm:py-20 lg:py-24">
    <CornerMarkers />
    <p class="eyebrow m-0 mb-5">{{ hero.kicker }}</p>
    <h1
      id="hero-heading"
      class="m-0 max-w-[820px] text-[clamp(28px,7vw,54px)] font-normal leading-[1.12] tracking-[-0.02em] text-ink-strong [text-wrap:pretty]"
    >
      {{ hero.heading }}
    </h1>
    <div class="mt-8 flex sm:mt-9 flex-wrap gap-3">
      <a href="#contact" class="btn-primary">{{ hero.ctaPrimary }}</a>
      <a href="#work" class="btn-secondary">{{ hero.ctaSecondary }}</a>
    </div>
  </section>
</template>
