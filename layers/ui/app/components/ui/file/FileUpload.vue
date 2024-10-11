<template>
  <FileUploadRoot>
    <FileUploadDialog
      v-model="image"
      :description="description"
      :rounded="rounded"
      :height="height"
      :width="width"
    />
    <div class="flex max-sm:flex-col items-start sm:items-center gap-5 w-full">
      <div class="flex flex-col items-start gap-2">
        <FileUploadTitle>
          {{ title }}
        </FileUploadTitle>
        <FileUploadDescription>
          {{ description }}
        </FileUploadDescription>
      </div>
    </div>
  </FileUploadRoot>
</template>

<script lang="ts" setup>
import FileUploadDescription from "./FileUploadDescription.vue";
import FileUploadDialog from "./FileUploadDialog.vue";
import FileUploadRoot from "./FileUploadRoot.vue";
import FileUploadTitle from "./FileUploadTitle.vue";
import type { FileUploadProps, FileUploadEmits } from ".";

const emit = defineEmits<FileUploadEmits>();
const props = defineProps<FileUploadProps>();

const image = ref(props.modelValue as string | File);

watch(image, (i) => {
  emit("update:modelValue", i);
});
</script>
