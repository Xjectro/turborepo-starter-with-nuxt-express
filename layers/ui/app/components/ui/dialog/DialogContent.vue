<template>
  <DialogPortal>
    <DialogOverlay />
    <DialogContent
      v-bind="forwarded"
      :class="
        $cn(
          'data-[state=open]:animate-content-show data-[state=closed]:animate-content-hide fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl p-6 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100] border border-solid border-zinc-100 dark:border-zinc-900 bg-white dark:bg-black',
          `${color}-color-mode`,
        )
      "
    >
      <div class="flex items-center justify-between w-full">
        <DialogTitle>
          {{ title }}
        </DialogTitle>
        <DialogClose />
      </div>
      <slot />
    </DialogContent>
  </DialogPortal>
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes } from "vue";
import { useForwardPropsEmits, DialogContent, DialogPortal } from "radix-vue";
import type { DialogContentProps, DialogContentEmits } from "radix-vue";
import DialogOverlay from "../dialog/DialogOverlay.vue";
import DialogTitle from "./DialogTitle.vue";
import DialogClose from "./DialogClose.vue";

const { color } = useTheme();

const props = defineProps<
  DialogContentProps & { class?: HtmlHTMLAttributes["class"]; title?: string }
>();
const emits = defineEmits<DialogContentEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>
