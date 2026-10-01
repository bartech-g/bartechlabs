<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <ul :aria-label="$t('lang.label')" class="m-0 flex list-none items-center p-0 text-[15px]">
    <li v-for="(loc, i) in locales" :key="loc.code" class="flex items-center">
      <span v-if="i > 0" class="px-1.5 text-muted" aria-hidden="true">/</span>
      <NuxtLink
        :to="switchLocalePath(loc.code)"
        :hreflang="loc.language"
        :lang="loc.language"
        :aria-current="loc.code === locale ? 'true' : undefined"
        :class="loc.code === locale ? 'no-underline' : 'text-muted no-underline hover:underline'"
      >
        <span aria-hidden="true">{{ loc.code.toUpperCase() }}</span>
        <span class="sr-only">{{ loc.name }}</span>
      </NuxtLink>
    </li>
  </ul>
</template>
