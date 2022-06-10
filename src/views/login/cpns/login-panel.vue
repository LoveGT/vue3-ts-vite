<template>
	<div class="login-panel">
		<h2 class="title font-bold text-2xl mb-8">Bison管理系统平台</h2>
		<el-tabs v-model="currentTab" type="border-card" stretch>
			<el-tab-pane name="account">
				<template #label>
					<span
						><el-icon><avatar /></el-icon> 账号登录</span
					>
				</template>
				<login-account ref="accountRef" />
			</el-tab-pane>
			<el-tab-pane name="feishu">
				<template #label>
					<span
						><el-icon><promotion /></el-icon> 飞书登录</span
					>
				</template>
				<login-fei-shu></login-fei-shu>
			</el-tab-pane>
			<el-tab-pane name="weixin">
				<template #label>
					<span
						><el-icon><chat-dot-round /></el-icon> 微信登录</span
					>
				</template>
				<login-wei-xin></login-wei-xin>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity'
import LoginAccount from './login-account.vue'
import LoginFeiShu from './login-feishu.vue'
import LoginWeiXin from './login-weixin.vue'
export default {
	components: {
		LoginAccount,
		LoginFeiShu,
		LoginWeiXin
	},
	setup() {
		const currentTab = ref<string>('account')
		return {
			currentTab
		}
	}
}
</script>

<style scoped lang="scss">
.login-panel {
	margin-bottom: 150px;
	width: 420px;
	.title {
		text-align: center;
	}
	.account-contrl {
		margin-top: 5px;
		display: flex;
		justify-content: space-between;
	}
	.login-btn {
		width: 100%;
		margin-top: 5px;
	}
}
</style>
