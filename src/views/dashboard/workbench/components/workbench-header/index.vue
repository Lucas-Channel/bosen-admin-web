<template>
  <n-card :bordered="false" class="rounded-16px shadow-sm">
    <div class="flex-y-center justify-between">
      <div class="flex-y-center">
        <icon-local-avatar class="text-70px" />
        <div class="pl-12px">
          <h3 class="text-18px font-semibold">Hey {{ auth.userInfo.username }}！ 今天又是充满活力的一天！</h3>
          <p class="leading-30px text-#999">welcome to back.</p>
        </div>
      </div>
      <n-space :size="24" :wrap="false">
        <n-statistic v-for="item in statisticData" :key="item.id" class="whitespace-nowrap" v-bind="item"></n-statistic>
      </n-space>
    </div>
  </n-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/store';

defineOptions({ name: 'DashboardWorkbenchHeader' });

const auth = useAuthStore();

interface StatisticData {
  id: number;
  label: string;
  value: string;
}
const statisticData = ref<StatisticData[]>([]);
function setTableData(data: StatisticData[]) {
  statisticData.value = data;
}
async function getStatisticData() {
  // const { data } = await fetchUserList();
  const data = [
    {
      id: 0,
      label: '项目数',
      value: '1'
    },
    {
      id: 1,
      label: '待办',
      value: '8/16'
    },
    {
      id: 2,
      label: '消息',
      value: '23'
    }
  ];
  setTableData(data);
}
function init() {
  getStatisticData();
}
// 初始化
init();
</script>

<style scoped></style>
