<script setup lang="ts">
import type { HomeEnCollectionItem } from '@nuxt/content'

defineProps<{ alert: HomeEnCollectionItem['alert'] }>()
</script>

<template>
  <aside
    id="alert"
    aria-labelledby="alert-heading"
    class="relative border-b border-ink-strong bg-ink px-4 sm:px-8 py-3 text-surface"
  >
    <CornerMarkers />
    <p id="alert-heading" class="m-0 flex items-center gap-3 font-mono text-sm leading-snug">
      <!-- Same diamond as the section markers, pulsing to read as "live" -->
      <span class="relative flex h-[7px] w-[7px] shrink-0" aria-hidden="true">
        <span class="absolute inset-0 rotate-45 bg-surface/60 motion-safe:animate-ping" />
        <span class="relative h-[7px] w-[7px] rotate-45 bg-surface" />
      </span>
      <span class="[text-wrap:pretty]">{{ alert.title }}</span>
    </p>
  </aside>
</template>
