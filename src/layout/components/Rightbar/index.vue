<template>
	<div class="right-bar flex justify-around items-center">
		<template v-if="true">
			<Screenfull />
			<el-tooltip effect="dark" content="布局大小"
				><SizeSelect
					class="px-6"
					icon-name="size"
					:dropdown-options="sizeOptions"
					:selected-item="size"
					@change-item="handleSetSize"
				></SizeSelect>
			</el-tooltip>
			<el-tooltip effect="dark" content="语言切换">
				<SizeSelect
					class="pr-6"
					icon-name="changeLanguage"
					:dropdown-options="languageOptions"
					:selected-item="lang"
					@change-item="handleSetLang"
				></SizeSelect>
			</el-tooltip>
		</template>
		<el-dropdown @command="handleCommand">
			<span class="el-dropdown-link flex items-center mr-4">
				<img
					:src="avatarUrl"
					class="user-avatar border-yellow-500 rounded-full w-10"
				/>
				<el-icon class="el-icon--right">
					<arrow-down />
				</el-icon>
			</span>
			<template #dropdown>
				<el-dropdown-menu>
					<el-dropdown-item command="profile-center">个人中心</el-dropdown-item>
					<el-dropdown-item command="settings">布局设置</el-dropdown-item>
					<el-dropdown-item command="logout">退出登录</el-dropdown-item>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useLoginStore } from '@/store/modules/login/login'
import { useSettingsStore } from '@/store/modules/global/settings'
import { useAppStore } from '@/store/modules/global/app'

import Screenfull from '@/components/Screenfull/index.vue'
import SizeSelect from '@/components/SizeSelect/index.vue'
// import { ElLoading, ElMessageBox } from 'element-plus'

const loginStore = useLoginStore()
const settingsStore = useSettingsStore()
const appStore = useAppStore()
// const emits = defineEmits(['setLayout'])
const sizeOptions = ref([
	{ label: '较大', value: 'large' },
	{ label: '默认', value: 'default' },
	{ label: '稍小', value: 'small' }
])
const handleSetSize = (size) => {
	appStore.setSize(size)
	const loading = ElLoading.service({
		lock: true,
		text: '正在设置布局大小，请稍候...',
		background: 'rgba(0, 0, 0, 0.7)'
	})
	setTimeout('window.location.reload()', 1000)
	setTimeout(() => {
		loading.close()
	}, 300)
}
const size = computed(() => appStore.size)

const languageOptions = ref([
	{ label: '中文', value: 'zh-cn' },
	{ label: '英文', value: 'zh-en' }
])
const handleSetLang = (size) => {
	appStore.setLanguage(size)
	const loading = ElLoading.service({
		lock: true,
		text: '正在切换语言，请稍候...',
		background: 'rgba(0, 0, 0, 0.7)'
	})
	setTimeout('window.location.reload()', 1000)
	setTimeout(() => {
		loading.close()
	}, 300)
}
const lang = computed(() => appStore.lang)

const avatarUrl = computed(() => loginStore.avatar)
const handleCommand = (command) => {
	switch (command) {
		case 'proflie-center':
			break
		case 'settings':
			setLayout()
			break
		case 'logout':
			handleLogout()
			break
		default:
			break
	}
}
const setLayout = () => {
	settingsStore.changeSettings('showSettings', true)
}
const handleLogout = () => {
	ElMessageBox.confirm('确定注销并退出系统吗？', '提示', {
		confirmButtonText: '确定',
		cancelButtonText: '取消',
		type: 'warning'
	})
		.then(() => {
			loginStore.logoutAction().then((res) => {
				if (res.code === 200) {
					ElLoading.service({
						lock: true,
						text: '退出登录成功，即将返回登录页',
						background: 'rgba(0,0,0,.2)'
					})
					setTimeout(() => {
						location.href = '/index'
					}, 1000)
				}
			})
		})
		.catch((err) => {
			console.log(err)
		})
}
</script>

<style scoped lang="scss">
// .right-bar {
// 	display: flex;
// 	justify-content: space-around;
// 	max-width: 250px;
// 	min-width: 150px;
// 	// .user-avatar {
// 	// 	cursor: pointer;
// 	// 	width: 30px;
// 	// 	height: 30px;
// 	// 	border-radius: 50%;
// 	// }
// }
//
</style>
