<template>
  <div class="h-full overflow-hidden">
    <n-card title="店铺管理" :bordered="false" class="rounded-16px shadow-sm">
      <n-space class="pb-12px" justify="space-between">
        <n-space>
          <n-button type="primary" @click="handleAddTable">
            <icon-ic-round-plus class="mr-4px text-20px" />
            新增
          </n-button>
          <n-button type="error">
            <icon-ic-round-delete class="mr-4px text-20px" />
            删除
          </n-button>
        </n-space>
        <n-space align="center" :size="18">
          <n-button size="small" type="primary" @click="getTableData">
            <icon-mdi-refresh class="mr-4px text-16px" :class="{ 'animate-spin': loading }" />
            刷新表格
          </n-button>
          <column-setting v-model:columns="columns" />
        </n-space>
      </n-space>
      <n-data-table :columns="columns" :data="tableData" :loading="loading" :pagination="pagination" remote/>
      <table-action-modal v-model:visible="visible" :type="modalType" :edit-data="editData" />
    </n-card>
  </div>
</template>

<script setup lang="tsx">
import { reactive, ref } from 'vue';
import type { Ref } from 'vue';
import { NButton, NPopconfirm, NSpace, NTag } from 'naive-ui';
import type { DataTableColumns, PaginationProps } from 'naive-ui';
import { storeShopApplyStatusEnum } from '@/constants';
import { storeShopPageList } from '@/service';
import { useBoolean, useLoading } from '@/hooks';
import ColumnSetting from '../../component/table/column-setting.vue';
import TableActionModal from './components/table-action-modal.vue';
import type { ModalType } from './components/table-action-modal.vue';

const { loading, startLoading, endLoading } = useLoading(false);
const { bool: visible, setTrue: openModal } = useBoolean();

const tableData = ref<StoreShop.StoreShopInfo[]>([]);
function setTableData(data: StoreShop.StoreShopInfo[]) {
  tableData.value = data;
}

async function getTableData() {
  startLoading();
  const { data } = await storeShopPageList('', 1, '', pagination.page!, pagination.pageSize!);
  if (data) {
    setTimeout(() => {
      setTableData(data.data);
      endLoading();
    }, 1000);
    pagination.itemCount = data.totalCount;
  }
}

const columns: Ref<DataTableColumns<StoreShop.StoreShopInfo>> = ref([
  {
    type: 'selection',
    align: 'center'
  },
  {
    key: 'storeId',
    title: '店铺ID',
    align: 'center'
  },
  {
    key: 'storeName',
    title: '店铺名称',
    align: 'center'
  },
  {
    key: 'logoUrl',
    title: '店铺logo',
    align: 'center'
  },
  {
    key: 'shopName',
    title: '上架商城',
    align: 'center'
  },
  {
    key: 'applyStatus',
    title: '状态',
    align: 'center',
    render: row => {
      if (row.applyStatus) {
        const tagTypes: Record<StoreShop.StoreShopApplyStatus, NaiveUI.ThemeColor> = {
          '1': 'default',
          '2': 'success',
          '3': 'error',
          '4': 'default',
          '5': 'success',
          '6': 'error'
        };

        return <NTag type={tagTypes[row.applyStatus]}>{storeShopApplyStatusEnum[row.applyStatus]}</NTag>;
      }
      return <span></span>;
    }
  },
  {
    key: 'actions',
    title: '操作',
    align: 'center',
    render: row => {
      return (
        <NSpace justify={'center'}>
          <NButton size={'small'} onClick={() => handleEditTable(row.id)}>
            编辑
          </NButton>
          <NPopconfirm onPositiveClick={() => handleDeleteTable(row.id)}>
            {{
              default: () => '确认删除',
              trigger: () => <NButton size={'small'}>删除</NButton>
            }}
          </NPopconfirm>
        </NSpace>
      );
    }
  }
]) as Ref<DataTableColumns<StoreShop.StoreShopInfo>>;

const modalType = ref<ModalType>('add');

function setModalType(type: ModalType) {
  modalType.value = type;
}

const editData = ref<StoreShop.StoreShopInfo | null>(null);

function setEditData(data: StoreShop.StoreShopInfo | null) {
  editData.value = data;
}

function handleAddTable() {
  openModal();
  setModalType('add');
}

function handleEditTable(rowId: string) {
  const findItem = tableData.value.find(item => item.id === rowId);
  if (findItem) {
    setEditData(findItem);
  }
  setModalType('edit');
  openModal();
}

function handleDeleteTable(rowId: string) {
  window.$message?.info(`点击了删除，rowId为${rowId}`);
}

const pagination: PaginationProps = reactive({
  page: 1,
  pageSize: 1,
  showSizePicker: true,
  pageSizes: [1, 15, 20, 25, 30],
  onChange: (page: number) => {
    pagination.page = page;
    getTableData();
  },
  onUpdatePageSize: (pageSize: number) => {
    pagination.pageSize = pageSize;
    pagination.page = 1;
    getTableData();
  }
});

function init() {
  getTableData();
}

// 初始化
init();
</script>

<style scoped></style>
