<template>
  <h6
    :class="
      $cn('transition-all font-chakra-petch font-medium text-sm', props.class)
    "
  >
    {{ label }}
  </h6>
</template>

<script lang="ts" setup>
const props = defineProps({
  label: { type: String, default: "" },
  class: { type: String, default: "" },
});
</script>
