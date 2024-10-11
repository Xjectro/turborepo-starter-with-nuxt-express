<template>
  <div class="inline-flex items-center cursor-pointer">
    <input
      id="toggle-switch"
      @change="$emit('update:checked', !checked)"
      type="checkbox"
      :checked="checked"
      class="sr-only peer"
    />
    <label
      for="toggle-switch"
      class="relative cursor-pointer w-12 h-7 bg-zinc-200 peer-focus:outline-none rounded-full peer dark:bg-zinc-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-zinc-400 dark:after:bg-zinc-400 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:transition-all peer-checked:bg-alien-500 after:peer-checked:bg-zinc-100"
    />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  checked: Boolean,
});
const emit = defineEmits(["update:checked"]);
const { checked } = useVModels(props, emit);
</script>
