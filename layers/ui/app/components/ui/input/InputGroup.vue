<template>
  <fieldset
    :disabled="disabled"
    :class="
      $cn(
        'pointer-events-auto opacity-100 disabled:pointer-events-none disabled:opacity-60 text-zinc-900 dark:text-white',
        props.class,
      )
    "
  >
    <slot />
  </fieldset>
</template>

<script lang="ts" setup>
const props = defineProps({
  disabled: Boolean,
  class: { type: String, default: "" },
});
</script>
