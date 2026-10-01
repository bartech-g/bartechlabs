<script setup lang="ts">
defineProps<{ id: string, title: string, aside: string }>()
</script>

<template>
  <div class="flex flex-wrap justify-between gap-2 border-b border-line px-4 py-5 sm:px-8 sm:py-7">
    <h2 :id="id" class="m-0 text-xl font-bold">{{ title }}</h2>
    <span class="eyebrow">{{ aside }}</span>
  </div>
</template>
