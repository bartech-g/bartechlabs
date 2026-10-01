<script setup lang="ts">
withDefaults(defineProps<{ compact?: boolean }>(), { compact: false })

const localePath = useLocalePath()
</script>

<template>
  <NuxtLink
    :to="localePath('/')"
    :aria-label="$t('logoLabel')"
    class="flex items-center gap-2.5 no-underline"
  >
    <span
      class="font-display font-black leading-none tracking-[-0.02em] text-ink [font-stretch:125%]"
      :class="compact ? 'text-[15px]' : 'text-xl'"
      aria-hidden="true"
    >
      <template v-if="compact">B<span class="font-normal tracking-normal">[L]</span></template>
      <template v-else>BARTECH<span class="font-normal tracking-normal">[LABS]</span></template>
    </span>
  </NuxtLink>
</template>
