<script setup lang="ts">
import type { HomeEnCollectionItem } from '@nuxt/content'

defineProps<{ about: HomeEnCollectionItem['about'] }>()
</script>

<template>
  <section
    id="about"
    aria-labelledby="about-heading"
    class="relative grid grid-cols-1 md:grid-cols-2 border-b border-line"
  >
    <CornerMarkers />
    <div class="border-b border-line px-4 sm:px-8 md:border-b-0 md:border-r pb-10 pt-7">
      <h2 id="about-heading" class="m-0 mb-5 text-xl font-bold">{{ about.title }}</h2>
      <p
        v-for="(paragraph, i) in about.paragraphs"
        :key="i"
        class="m-0 mb-3.5 max-w-[520px] text-base leading-relaxed text-body last:mb-0 [text-wrap:pretty]"
      >
        {{ paragraph }}
      </p>
    </div>
    <div class="bg-surface px-4 sm:px-8 pb-10 pt-7">
      <h3 class="eyebrow m-0 mb-4 font-normal">{{ about.stackLabel }}</h3>
      <dl class="m-0 grid grid-cols-[90px_1fr] sm:grid-cols-[110px_1fr] gap-x-4 gap-y-2.5 text-[15px] leading-snug">
        <template v-for="row in about.stack" :key="row.label">
          <dt class="text-muted">{{ row.label }}</dt>
          <dd class="m-0">{{ row.value }}</dd>
        </template>
      </dl>
    </div>
  </section>
</template>
