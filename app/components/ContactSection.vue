<script setup lang="ts">
import type { HomeEnCollectionItem } from '@nuxt/content'

defineProps<{ contact: HomeEnCollectionItem['contact'] }>()
</script>

<template>
  <section
    id="contact"
    aria-labelledby="contact-heading"
    class="relative grid grid-cols-1 md:grid-cols-2 border-b border-line bg-surface"
  >
    <CornerMarkers />
    <div class="border-b border-line px-4 sm:px-8 md:border-b-0 md:border-r pb-10 pt-7">
      <h2 id="contact-heading" class="m-0 mb-5 text-xl font-bold">{{ contact.title }}</h2>
      <p class="m-0 mb-5 max-w-[420px] text-base leading-relaxed text-body">{{ contact.intro }}</p>
      <p class="m-0 text-[15px] leading-[1.8]">
        <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
      </p>
    </div>
    <div class="px-4 pb-10 sm:px-8 pt-7">
      <ContactForm :project-types="contact.projectTypes" />
    </div>
  </section>
</template>
