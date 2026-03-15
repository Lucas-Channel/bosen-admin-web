<template>
  <n-space :vertical="true" :size="16">
    <my-workbench-header />
    <my-workbench-main />
  </n-space>
</template>

<script lang="ts" setup>
import { MyWorkbenchHeader, MyWorkbenchMain } from './components';
</script>

<style scoped></style>
