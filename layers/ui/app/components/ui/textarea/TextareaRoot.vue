<template>
  <div class="relative w-full h-fit">
    <textarea
      id="input"
      :value="value"
      :style="{ minHeight: props.minHeight, maxHeight: props.maxHeight }"
      :type="props.type"
      class="transition-all flex items-center justify-start w-full cursor-pointer focus:cursor-text outline-none p-3 rounded-xl border border-solid font-inter border-zinc-300 dark:border-zinc-900 text-zinc-900 dark:text-white bg-transparent hover:bg-zinc-100 focus:bg-zinc-100 dark:bg-transparent dark:hover:bg-zinc-950 dark:focus:bg-zinc-950"
      @input="handleInput"
    />
    <div
      class="absolute bottom-0 right-0 m-4 pointer-events-none font-chakra-petch font-light text-black dark:text-white"
    >
      {{ modelValue.length }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: { type: String, default: "" },
  type: String as PropType<"text" | "email" | "password">,
  class: { type: String, default: "h-[56px]" },
  minHeight: {
    type: String,
    default: "100px",
  },
  maxHeight: {
    type: String,
    default: "200px",
  },
});

const value = ref(props.modelValue);

const emit = defineEmits(["update:modelValue"]);

function handleInput(e: Event) {
  const target = e.target as HTMLInputElement;
  value.value = target.value;
}

watch(value, () => {
  emit("update:modelValue", value.value);
});
</script>
