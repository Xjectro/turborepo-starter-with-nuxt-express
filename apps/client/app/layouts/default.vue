<template>
  <div>
    <NuxtLoadingIndicator
      :color="colors.find((c) => c.key == store.color)?.color"
    />
    <NuxtRouteAnnouncer />
    <div v-if="isLoaded" :class="`${store.color}-color-mode`">
      <NuxtPage />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { colors, store } = useTheme();
const isLoaded = ref(false);

tryOnMounted(() => {
  isLoaded.value = true;
});
</script>
