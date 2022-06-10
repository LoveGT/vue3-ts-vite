<template>
	<div class="dashboard-container">
		<p class="text-skin-base">全局换肤测试</p>
		<el-button type="primary" @click="handleClick">{{
			$t('home.title')
		}}</el-button>
		<!-- tailWindcss换肤功能测试 -->
		<div class="min-h-screen bg-white">
			<div class="fu">
				<el-button
					class="test border rounded-lg border-dark-900 text-green-500 hover:text-white hover:bg-red-400 bg-red-800"
				>
					比例
				</el-button>
				<el-icon :size="20">
					<close />
				</el-icon>
				<el-date-picker
					v-model="date"
					type="datetime"
					placeholder="Select date and time"
				/>
			</div>
			<h1 class="text-lg">tailWindcss换肤功能测试</h1>
			<ul class="p-10 space-y-10">
				<li :class="skinTheme">
					<a class="text-white">
						<article
							class="relative flex items-center transition-transform transform group"
						>
							<div
								class="flex flex-col flex-grow py-8 space-y-4 text-base rounded px-8 shadow-md bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90"
							>
								<div class="flex flex-row justify-between">
									<h3 class="text-xl text-skin-base font-bold">
										useEffect 完整指南{{ skinTheme }}
									</h3>
									<span>2020-06-08</span>
								</div>
								<p class="leading-8 text-skin-muted">
									I was running into this just a couple days ago! What a perfect
									timing for this tutorial. Thank you Tailwind Labs for these
									videos. Please, keep coming up with high-quality materials
									like this.
								</p>
								<a
									class="w-40 m-auto bg-skin-button-accent text-skin-inverted hover:bg-skin-button-accent-hover flex items-center justify-center py-3 border font-medium rounded-md shadow-sm sm:px-8"
									>get started</a
								>
								<a
									class="w-40 m-auto bg-skin-button-muted text-white flex items-center justify-center py-3 border font-medium rounded-md shadow-sm sm:px-8 hover:bg-opacity-70"
									@click="getUserList"
									>Live deno</a
								>
							</div>
						</article>
					</a>
				</li>
				<li :class="skinTheme">
					<a class="text-white">
						<article
							class="relative flex items-center transition-transform transform group"
						>
							<div
								class="flex flex-col flex-grow py-8 space-y-4 text-base rounded px-8 shadow-md bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90"
							>
								<div class="flex flex-row justify-between">
									<h3 class="text-xl text-skin-base font-bold">
										useEffect 完整指南{{ skinTheme }}
									</h3>
									<span>2020-06-08</span>
								</div>
								<p class="leading-8 text-skin-muted">
									I was running into this just a couple days ago! What a perfect
									timing for this tutorial. Thank you Tailwind Labs for these
									videos. Please, keep coming up with high-quality materials
									like this.
								</p>
								<a
									class="w-40 m-auto bg-skin-button-accent text-skin-inverted hover:bg-skin-button-accent-hover flex items-center justify-center py-3 border font-medium rounded-md shadow-sm sm:px-8"
									>get started</a
								>
								<a
									class="w-40 m-auto bg-skin-button-muted text-white flex items-center justify-center py-3 border font-medium rounded-md shadow-sm sm:px-8 hover:bg-opacity-70"
									@click="getUserList"
									>Live deno</a
								>
							</div>
						</article>
					</a>
				</li>
				<li :class="skinTheme">
					<a class="text-white">
						<article
							class="relative flex items-center transition-transform transform group"
						>
							<div
								class="flex flex-col flex-grow py-8 space-y-4 text-base rounded px-8 shadow-md bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90"
							>
								<div class="flex flex-row justify-between">
									<h3 class="text-xl text-skin-base font-bold">
										useEffect 完整指南{{ skinTheme }}
									</h3>
									<span>2020-06-08</span>
								</div>
								<p class="leading-8 text-skin-muted">
									I was running into this just a couple days ago! What a perfect
									timing for this tutorial. Thank you Tailwind Labs for these
									videos. Please, keep coming up with high-quality materials
									like this.
								</p>
								<a
									class="w-40 m-auto bg-skin-button-accent text-skin-inverted hover:bg-skin-button-accent-hover flex items-center justify-center py-3 border font-medium rounded-md shadow-sm sm:px-8"
									>get started</a
								>
								<a
									class="w-40 m-auto bg-skin-button-muted text-white flex items-center justify-center py-3 border font-medium rounded-md shadow-sm sm:px-8 hover:bg-opacity-70"
									@click="getUserList"
									>Live deno</a
								>
							</div>
						</article>
					</a>
				</li>
				<li :class="skinTheme">
					<a class="text-white">
						<article
							class="relative flex items-center transition-transform transform group"
						>
							<div
								class="flex flex-col flex-grow py-8 space-y-4 text-base rounded px-8 shadow-md bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90"
							>
								<div class="flex flex-row justify-between">
									<h3 class="text-xl text-skin-base font-bold">
										useEffect 完整指南{{ skinTheme }}
									</h3>
									<span>2020-06-08</span>
								</div>
								<p class="leading-8 text-skin-muted">
									I was running into this just a couple days ago! What a perfect
									timing for this tutorial. Thank you Tailwind Labs for these
									videos. Please, keep coming up with high-quality materials
									like this.
								</p>
								<a
									class="w-40 m-auto bg-skin-button-accent text-skin-inverted hover:bg-skin-button-accent-hover flex items-center justify-center py-3 border font-medium rounded-md shadow-sm sm:px-8"
									>get started</a
								>
								<a
									class="w-40 m-auto bg-skin-button-muted text-white flex items-center justify-center py-3 border font-medium rounded-md shadow-sm sm:px-8 hover:bg-opacity-70"
									@click="getUserList"
									>Live deno</a
								>
							</div>
						</article>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script lang="ts">
export default {
	name: 'Dashboard'
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { testCode, testLogin } from '@/api/login/mock-login'
import { listUser } from '@/api/system/user'
import { useLoginStore } from '@/store/modules/login/login'
import { useSettingsStore } from '@/store/modules/global/settings'

import { storeToRefs } from 'pinia'
// import { ElLoading } from 'element-plus'

const date = ref()
const loginStore = useLoginStore()
const settingsStore = useSettingsStore()
const router = useRouter()
const { skinTheme } = storeToRefs(settingsStore)
const handleCode = () => {
	testCode().then((res) => {
		console.log(res, 'res')
	})
}
const handleLogin = () => {
	testLogin({}).then((res) => {
		console.log(res, 'res')
	})
}
const getUserList = () => {
	listUser({}).then((res) => {
		console.log(res, 'userList')
	})
}
const handleClick = () => {
	const loadding = ElLoading.service({
		lock: true,
		text: 'Loading',
		background: 'rgba(0, 0, 0, 0.7)'
	})

	setTimeout(() => {
		loadding.close()
	}, 3000)
}
</script>

<style lang="scss" scoped>
.dashboard-container {
	overflow: auto;
}
</style>
