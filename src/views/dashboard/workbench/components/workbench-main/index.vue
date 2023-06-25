<template>
  <n-grid :item-responsive="true" :x-gap="16" :y-gap="16">
    <n-grid-item span="0:24 640:24 1024:24">
      <n-space :vertical="true" :size="16">
        <n-card :bordered="false" size="small" class="shadow-sm rounded-16px">
          <n-tabs type="line" animated>
            <n-tab-pane name="task" tab="我的待办">我的待办</n-tab-pane>
            <n-tab-pane name="tasked" tab="我的已办">我的已办</n-tab-pane>
            <n-tab-pane name="system-msg" tab="系统消息">系统消息</n-tab-pane>
            <n-tab-pane name="advice" tab="通知公告">通知公告</n-tab-pane>
          </n-tabs>
        </n-card>
      </n-space>
    </n-grid-item>
    <n-grid-item span="0:24 640:24 1024:24">
      <n-space :vertical="true" :size="16">
        <n-card title="常用工具" :bordered="false" size="small" class="shadow-sm rounded-16px">
          <n-grid :item-responsive="true" responsive="screen" cols="m:2 l:3" :x-gap="8" :y-gap="8">
            <n-grid-item v-for="item in shortcuts" :key="item.id">
              <shortcuts-card v-bind="item" />
            </n-grid-item>
          </n-grid>
        </n-card>
      </n-space>
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import { ShortcutsCard } from './components';

defineOptions({ name: 'DashboardWorkbenchMain' });

interface Shortcuts {
  id: number;
  label: string;
  icon: string;
  iconColor: string;
}

const shortcuts: Shortcuts[] = [
  { id: 0, label: '主控台', icon: 'mdi:desktop-mac-dashboard', iconColor: '#409eff' },
  { id: 1, label: '系统管理', icon: 'ic:outline-settings', iconColor: '#7238d1' },
  { id: 2, label: '权限管理', icon: 'mdi:family-tree', iconColor: '#f56c6c' },
  { id: 3, label: '组件', icon: 'fluent:app-store-24-filled', iconColor: '#19a2f1' },
  { id: 4, label: '表格', icon: 'mdi:table-large', iconColor: '#fab251' },
  { id: 5, label: '图表', icon: 'mdi:chart-areaspline', iconColor: '#8aca6b' }
];
</script>

<style scoped></style>
