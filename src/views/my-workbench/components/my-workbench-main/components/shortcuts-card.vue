<template>
  <div
    class="flex-col-center h-120px p-12px border-1px border-#efeff5 dark:border-#ffffff17 rounded-4px hover:shadow-sm cursor-pointer"
  >
    <svg-icon :icon="icon" :style="{ color: iconColor }" class="text-30px" />
    <p class="py-8px text-16px">{{ label }}</p>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'MyWorkbenchMainShortcutsCard' });

interface Props {
  label: string;
  icon: string;
  iconColor: string;
}

defineProps<Props>();
</script>

<style scoped></style>
