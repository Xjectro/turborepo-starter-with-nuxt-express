<template>
  <InputGroup class="relative flex flex-col items-start gap-2 w-full">
    <InputLabel :label="label" />
    <TextareaRoot
      v-model="value"
      :maxHeight="props.maxHeight"
      :minHeight="props.minHeight"
      :type="type"
    />
  </InputGroup>
</template>

<script lang="ts" setup>
import TextareaRoot from "./TextareaRoot.vue";
import { InputLabel, InputGroup } from "../input";

const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  modelValue: {
    type: String,
    required: true,
  },
  type: {
    type: String as PropType<"text" | "password" | "email">,
    default: "text",
  },
  minHeight: {
    type: String,
    default: "100px",
  },
  maxHeight: {
    type: String,
    default: "200px",
  },
});

const emit = defineEmits(["update:modelValue"]);
const value = ref(props.modelValue);

watch(value, () => {
  emit("update:modelValue", value.value);
});
</script>
