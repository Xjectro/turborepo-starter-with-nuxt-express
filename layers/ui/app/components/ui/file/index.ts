export { default as FileUpload } from "./FileUpload.vue";
export { default as FileUploadDialog } from "./FileUploadDialog.vue";
export { default as FileUploadDescription } from "./FileUploadDescription.vue";
export { default as FileUploadRoot } from "./FileUploadRoot.vue";
export { default as FileUploadTitle } from "./FileUploadTitle.vue";

export type FileUploadProps = {
  modelValue: File | string | null;
  width?: string;
  height?: string;
  rounded?: boolean;
  title?: string;
  description?: string;
};

export type FileUploadEmits = {
  "update:modelValue": [FileUploadProps["modelValue"]];
};

export type FileUploadDialogProps = {
  modelValue: File | string | null;
  width: FileUploadProps["width"];
  height: FileUploadProps["height"];
  rounded: FileUploadProps["rounded"];
  description?: string;
};

export type FileUploadDialogEmits = {
  "update:modelValue": [FileUploadProps["modelValue"]];
};
