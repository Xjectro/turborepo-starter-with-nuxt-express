<template>
  <input
    :placeholder="placeholder"
    :value="value"
    :type="type"
    :class="
      $cn(
        'transition-all cursor-pointer focus:cursor-text resize-none outline-none rounded-xl border border-solid font-inter border-zinc-300 dark:border-zinc-900 text-zinc-900 dark:text-white bg-transparent hover:bg-zinc-100 focus:bg-zinc-100 dark:bg-transparent dark:hover:bg-zinc-950 dark:focus:bg-zinc-950',
        props.class,
      )
    "
    @input="handleInput"
  />
</template>

<script lang="ts" setup>
const props = defineProps({
  placeholder: String,
  modelValue: String,
  type: String as PropType<"text" | "email" | "password">,
  class: { type: String, default: "h-[56px]" },
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
