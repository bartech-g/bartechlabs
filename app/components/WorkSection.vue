<script setup lang="ts">
import type { HomeEnCollectionItem } from '@nuxt/content'

defineProps<{ work: HomeEnCollectionItem['work'] }>()
</script>

<template>
  <section id="work" aria-labelledby="work-heading" class="relative border-b border-line">
    <CornerMarkers />
    <SectionHeader id="work-heading" :title="work.title" :aside="work.aside" />
    <ul class="m-0 list-none p-0">
      <li
        v-for="(item, i) in work.items"
        :key="i"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-baseline gap-x-6 gap-y-1 sm:gap-y-2 border-b border-line-soft px-4 sm:px-8 py-5 text-[15px] last:border-b-0"
      >
        <h3 class="m-0 text-[15px] font-bold">{{ item.name }}</h3>
        <p class="m-0 text-subtle">{{ item.what }}</p>
        <p class="m-0 font-mono text-sm text-muted">{{ item.stack }}</p>
        <div class="flex justify-between gap-3">
          <span class="text-muted">{{ item.year }}</span>
          <a
            :href="item.url"
            target="_blank"
            rel="noopener"
            :aria-label="$t('work.visitLabel', { name: `${item.name} — ${item.what}` })"
          >{{ $t('work.visit') }} <span aria-hidden="true">↗</span></a>
        </div>
      </li>
    </ul>
  </section>
</template>
