<template>
  <n-form ref="formRef" :model="model" :rules="rules" size="large" :show-label="false">
    <n-form-item path="username">
      <n-input v-model:value="model.username" placeholder="请输入用户名" />
    </n-form-item>
    <n-form-item path="password">
      <n-input v-model:value="model.password" type="password" show-password-on="click" placeholder="请输入密码" />
    </n-form-item>
    <n-space :vertical="true" :size="24">
      <div class="flex-y-center justify-between">
        <n-checkbox v-model:checked="rememberMe">记住我</n-checkbox>
        <n-button :text="true" @click="toLoginModule('reset-pwd')">忘记密码</n-button>
      </div>
      <n-button
        type="primary"
        size="large"
        :block="true"
        :round="true"
        :loading="auth.loginLoading"
        @click="handleSubmit"
      >
        确定
      </n-button>
    </n-space>
  </n-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { FormInst, FormRules } from 'naive-ui';
import { CLIENT_ID, CLIENT_SECRET } from '@/config';
import { useAuthStore } from '@/store';
import { useRouterPush } from '@/composables';
import { createRequiredFormRule } from '@/utils';
import { encryptoPassword } from '@/utils/crypto';

const auth = useAuthStore();
const { login } = useAuthStore();
const { toLoginModule } = useRouterPush();

const formRef = ref<HTMLElement & FormInst>();

const model = reactive({
  username: 'admin',
  password: 'bosen',
  grant_type: 'password',
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET
});

const rules: FormRules = {
  username: createRequiredFormRule('请输入用户名'),
  password: createRequiredFormRule('请输入密码')
};

const rememberMe = ref(false);

async function handleSubmit() {
  await formRef.value?.validate();

  const { username, password, grant_type, client_id, client_secret } = model;

  const en = encryptoPassword(password);

	const clientSecret = encryptoPassword(client_secret);

  login(username, en, grant_type, client_id, clientSecret);
}
</script>

<style scoped></style>
