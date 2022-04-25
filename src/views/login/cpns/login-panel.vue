<template>
	<div class="login-panel">
		<h2 class="title">Bison管理系统平台</h2>
		<el-tabs type="border-card" stretch v-model="currentTab">
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
