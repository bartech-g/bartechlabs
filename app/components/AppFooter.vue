<template>
  <footer class="flex flex-wrap justify-between gap-3 px-4 sm:px-8 py-6 text-sm text-muted">
    <span class="flex items-center gap-3">
      <SiteLogo compact />
      © {{ new Date().getFullYear() }} Bartech Labs
    </span>
    <ul :aria-label="$t('footer.social')" class="m-0 flex list-none gap-5 p-0">
      <li><a href="#">{{ $t('footer.github') }}</a></li>
      <li><a href="#">{{ $t('footer.linkedin') }}</a></li>
      <li><a href="mailto:hello@bartechlabs.com">{{ $t('footer.email') }}</a></li>
    </ul>
  </footer>
</template>
