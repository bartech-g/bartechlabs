<template>
  <!--
    Positioned so it never takes a cell when the section is a grid.
    z-10 keeps the diamonds above the next section's background; they only
    show once the page has a gutter around it, otherwise they'd be cut in half.
  -->
  <span class="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden min-[1216px]:block" aria-hidden="true">
    <span class="section-marker -left-1" />
    <span class="section-marker -right-1" />
  </span>
</template>
