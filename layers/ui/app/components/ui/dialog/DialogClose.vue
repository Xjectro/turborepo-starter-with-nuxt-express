<template>
  <DialogClose
    v-bind="delegatedProps"
    :class="
      $cn(
        'transition-all flex items-center justify-center outline-none p-2 text-zinc-600 dark:text-zinc-500 hover:text-black dark:hover:text-zinc-100',
        props.class,
      )
    "
    aria-label="Close"
  >
    <Icon name="lucide:x" class="w-6 h-6" />
  </DialogClose>
</template>

<script setup lang="ts">
import { DialogClose } from "radix-vue";
import type { DialogCloseProps } from "radix-vue";
import { type HtmlHTMLAttributes, computed } from "vue";

const props = defineProps<
  DialogCloseProps & { class?: HtmlHTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>
