<template>
  <PinInputRoot @complete="handleComplate" placeholder="○">
    <PinInputInput v-for="(id, index) in repeat" :key="id" :index="index" />
  </PinInputRoot>
</template>

<script lang="ts" setup>
import PinInputRoot from "./PinInputRoot.vue";
import PinInputInput from "./PinInputInput.vue";

defineProps({
  repeat: { type: Number, default: 5 },
});

const emit = defineEmits(["complate"]);

function handleComplate(e: string[]) {
  emit("complate", e.join(""));
}
</script>
