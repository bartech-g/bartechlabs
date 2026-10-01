<script setup lang="ts">
import type { HomeEnCollectionItem } from '@nuxt/content'

defineProps<{ process: HomeEnCollectionItem['process'] }>()
</script>

<template>
  <section id="process" aria-labelledby="process-heading" class="relative border-b border-line">
    <CornerMarkers />
    <SectionHeader id="process-heading" :title="process.title" :aside="process.aside" />
    <ol class="m-0 grid list-none overflow-hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 p-0">
      <li
        v-for="(step, i) in process.steps"
        :key="step.title"
        class="-mb-px -mr-px border-b border-r border-line px-4 sm:px-8 pb-8 pt-6 sm:pb-9 sm:pt-7"
      >
        <div class="eyebrow mb-4 sm:mb-7" aria-hidden="true">
          {{ String(i + 1).padStart(2, '0') }} {{ i < process.steps.length - 1 ? '→' : '■' }}
        </div>
        <h3 class="m-0 mb-2 text-lg font-bold">{{ step.title }}</h3>
        <p class="m-0 text-[15px] leading-normal text-subtle [text-wrap:pretty]">{{ step.text }}</p>
      </li>
    </ol>
  </section>
</template>
