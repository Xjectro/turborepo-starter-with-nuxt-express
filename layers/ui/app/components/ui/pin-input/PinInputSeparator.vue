<template>
  <Primitive v-bind="forwardedProps">
    <slot>
      <Icon name="svg-spinners:pulse-rings-multiple" />
    </slot>
  </Primitive>
</template>

<script lang="ts" setup>
import { Primitive, type PrimitiveProps, useForwardProps } from "radix-vue";

const props = defineProps<PrimitiveProps>();
const forwardedProps = useForwardProps(props);
</script>
