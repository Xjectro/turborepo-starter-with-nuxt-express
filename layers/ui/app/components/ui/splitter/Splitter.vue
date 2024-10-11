<template>
  <div
    :style="style"
    :class="$cn('relative flex', layoutClass[layout], props.class)"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    style?: Record<string, string> | null;
    class?: string | null;
    layout: "horizontal" | "vertical";
  }>(),
  {
    style: null,
    class: null,
    layout: "horizontal",
  },
);

const layoutClass = {
  vertical: "flex-col",
  horizontal: "flex-row",
};
</script>
