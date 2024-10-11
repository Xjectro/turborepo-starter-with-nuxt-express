<template>
  <div :class="$cn('', props.class)">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    class?: string | null;
  }>(),
  {
    class: null,
  },
);
</script>
