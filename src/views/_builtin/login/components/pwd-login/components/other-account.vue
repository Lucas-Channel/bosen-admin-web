<template>
  <n-space :vertical="true">
    <n-divider class="!mb-0 text-14px text-#666">其他账户登录</n-divider>
    <n-space justify="center">
      <n-button
        v-for="item in accounts"
        :key="item.username"
        type="primary"
        @click="login(item.username, item.password)"
      >
        {{ item.label }}
      </n-button>
    </n-space>
  </n-space>
</template>

<script lang="ts" setup>
interface Emits {
  (e: 'login', param: { username: string; password: string }): void;
}

const emit = defineEmits<Emits>();

const accounts = [
  {
    label: '超级管理员',
    username: 'Super',
    password: 'super123'
  },
  {
    label: '管理员',
    username: 'Admin',
    password: 'admin123'
  },
  {
    label: '普通用户',
    username: 'User01',
    password: 'user01123'
  }
];

function login(username: string, password: string) {
  emit('login', { username, password });
}
</script>

<style scoped></style>
