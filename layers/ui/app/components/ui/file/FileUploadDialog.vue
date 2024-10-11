<template>
  <UiDialog v-model:open="isOpen">
    <UiDialoagTrigger
      :style="{ height, maxWidth: width }"
      :class="
        $cn(
          'w-full overflow-hidden relative group border border-solid border-zinc-200 dark:border-zinc-800',
          props.rounded ? 'rounded-full' : 'rounded-lg',
        )
      "
    >
      <NuxtImg
        v-if="previewURL"
        :src="previewURL"
        alt="File Upload"
        class="absolute inset-0 z-10 object-cover w-full h-full"
      />
      <div
        :class="
          $cn(
            'transition-all flex items-center justify-center bg-contain w-full h-full cursor-pointer',
            {
              'absolute z-20 inset-0 opacity-0 hover:opacity-100 group-hover:bg-black/40 group-hover:bg-opacity-10 text-white':
                previewURL,
              'bg-zinc-100 dark:bg-zinc-950 text-black dark:text-white':
                !previewURL,
            },
          )
        "
      >
        <Icon
          name="material-symbols:select-window-2-outline"
          class="min-w-8 min-h-8 transition-all"
        />
      </div>
    </UiDialoagTrigger>

    <UiDialogContent :title="$t('layers.ui.file.fileUpload.dialog.title')">
      <div class="flex items-center py-5 gap-5">
        <button
          type="button"
          class="flex flex-col items-center p-5 rounded-xl gap-3 group border border-solid border-zinc-200 dark:border-zinc-900 bg-zinc-100 dark:bg-zinc-950"
          @click="open()"
        >
          <div
            :class="
              $cn(
                'transition-all flex items-center justify-center p-16 rounded-full cursor-pointer border-4 border-solid border-alien-950 bg-alien-500/80 text-black dark:text-white',
              )
            "
          >
            <Icon
              name="material-symbols:folder-open-outline"
              class="min-w-8 min-h-8 transition-all drop-shadow-dark-lg"
            />
          </div>
          <h6
            class="transition-all flex items-center gap-2 font-inter font-medium text-sm text-zinc-600 dark:text-zinc-500 group-hover:text-black dark:group-hover:text-white"
          >
            <Icon name="ic:outline-desktop-windows" class="w-4 h-4" />
            {{ $t("layers.ui.file.fileUpload.dialog.items.uploadImage") }}
          </h6>
        </button>
      </div>

      <UiDialogDescription v-if="description" class="max-w-[202px]">
        {{ description }}
      </UiDialogDescription>
    </UiDialogContent>
  </UiDialog>
</template>

<script lang="ts" setup>
import type { FileUploadDialogProps, FileUploadDialogEmits } from ".";

const emit = defineEmits<FileUploadDialogEmits>();
const props = defineProps<FileUploadDialogProps>();

const isOpen = ref(false);

const { open, onChange } = useFileDialog({
  accept: "image/*",
});

const previewURL = computed(() => {
  if (typeof props.modelValue === "string") {
    return props.modelValue;
  }
  return props.modelValue instanceof File
    ? URL.createObjectURL(props.modelValue)
    : null;
});

onChange((files) => {
  const file = files?.[0];
  if (file) {
    isOpen.value = false;
    emit("update:modelValue", file);
  }
});
</script>
