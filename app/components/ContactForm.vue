<script setup lang="ts">
defineProps<{ projectTypes: string[] }>();

const { t, locale } = useI18n();

const status = ref<"idle" | "sent" | "error">("idle");
const successRef = ref<HTMLElement>();

async function submit(data: Record<string, unknown>) {
  status.value = "idle";
  try {
    await $fetch("/api/contact", {
      method: "POST",
      body: { ...data, locale: locale.value },
    });
    status.value = "sent";
    await nextTick();
    successRef.value?.focus();
  } catch {
    status.value = "error";
  }
}
</script>

<template>
  <div aria-live="polite">
    <div
      v-if="status === 'sent'"
      ref="successRef"
      tabindex="-1"
      class="border border-line-strong bg-white p-6 text-base leading-normal"
    >
      {{ t("form.success") }}
    </div>
    <template v-else>
      <FormKit
        type="form"
        :actions="false"
        :incomplete-message="false"
        @submit="submit"
      >
        <FormKit
          type="text"
          name="name"
          :label="t('form.name')"
          validation="required|length:0,200"
          autocomplete="name"
        />
        <FormKit
          type="email"
          name="email"
          :label="t('form.email')"
          validation="required|email"
          autocomplete="email"
        />
        <FormKit
          type="select"
          name="projectType"
          :label="t('form.projectType')"
          :options="projectTypes"
        />
        <FormKit
          type="textarea"
          name="idea"
          :label="t('form.idea')"
          validation="required|length:0,5000"
          rows="5"
        />
        <div class="hp-field" aria-hidden="true">
          <FormKit
            type="text"
            name="hp_field"
            :label="t('form.honeypot')"
            tabindex="-1"
            autocomplete="new-password"
          />
        </div>
        <FormKit type="submit" :label="t('form.submit')" />
      </FormKit>
      <p
        v-if="status === 'error'"
        role="alert"
        class="m-0 mt-4 text-sm text-red-800"
      >
        {{ t("form.error") }}
      </p>
    </template>
  </div>
</template>
