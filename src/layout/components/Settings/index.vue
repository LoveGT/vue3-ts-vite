<template>
	<div class="settings">
		<div class="theme-settings">
			<h3 class="theme-settings-title text-dark-200 font-bold">主题风格设置</h3>
			<div class="theme-change flex my-10">
				<div
					class="theme-change-item mr-10 relative"
					@click="handleTheme('theme-dark')"
				>
					<img
						src="@/assets/images/dark.svg"
						alt="dark"
						class="cursor-pointer"
					/>
					<div
						v-if="sideTheme === 'theme-dark'"
						class="setting-drawer-block-checbox-selectIcon"
						style="display: block"
					>
						<i aria-label="图标: check" class="absolute top-3.5 left-5">
							<svg
								viewBox="64 64 896 896"
								data-icon="check"
								width="1em"
								height="1em"
								:fill="theme"
								aria-hidden="true"
								focusable="false"
								class=""
							>
								<path
									d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
								/>
							</svg>
						</i>
					</div>
				</div>
				<div
					class="theme-change-item relative"
					@click="handleTheme('theme-light')"
				>
					<img
						src="@/assets/images/light.svg"
						alt="light"
						class="cursor-pointer"
					/>
					<div
						v-if="sideTheme === 'theme-light'"
						class="setting-drawer-block-checbox-selectIcon"
						style="display: block"
					>
						<i aria-label="图标: check" class="absolute top-3.5 left-5">
							<svg
								viewBox="64 64 896 896"
								data-icon="check"
								width="1em"
								height="1em"
								:fill="theme"
								aria-hidden="true"
								focusable="false"
							>
								<path
									d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
								/>
							</svg>
						</i>
					</div>
				</div>
			</div>
			<div class="skin flex justify-between items-center">
				<span class="mr-8 text-sm text-gray-800">换肤模式</span>
				<el-switch
					v-model="skinTheme"
					inline-prompt
					size="large"
					active-value="theme-light"
					inactive-value="theme-dark"
					active-color="#13ce66"
					inactive-color="#ff4949"
				></el-switch>
				<span>{{ skinTheme }}</span>
			</div>
			<div class="them-color flex justify-between items-center">
				<span class="mr-8 text-sm text-gray-800">主题颜色</span>
				<theme-picker
					style="float: right; height: 26px; margin: -3px 8px 0 0"
					@theme-change="handleThemeChange"
				/>
			</div>
		</div>
		<el-divider />
		<div class="system-layout-settings">
			<h3 class="layout-settings-title text-dark-200 font-bold my-5">
				系统布局配置
			</h3>
			<div class="layout-settings-item flex justify-between items-center mb-3">
				<span class="mr-8 text-sm text-gray-800">开启 Tags-Views</span>
				<el-switch v-model="tagsView" class="drawer-switch" />
			</div>
			<div class="layout-settings-item flex justify-between items-center mb-3">
				<span class="mr-8 text-sm text-gray-800">固定 Header</span>
				<el-switch v-model="fixedHeader" class="drawer-switch" />
			</div>
			<div class="layout-settings-item flex justify-between items-center mb-3">
				<span class="mr-8 text-sm text-gray-800">显示 Logo</span>
				<el-switch v-model="sidebarLogo" class="drawer-switch" />
			</div>
		</div>
		<el-divider class="my-10" />
		<div class="reset-settings flex justify-between">
			<el-button
				type="primary"
				plain
				size="small"
				icon="DocumentAdd"
				@click="saveSetting"
				>保存配置</el-button
			>
			<el-button plain icon="Refresh" size="small" @click="resetSetting"
				>重置配置</el-button
			>
		</div>
	</div>
</template>

<script lang="ts">
export default { name: 'Settings' }
</script>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '@/store/modules/global/settings'

import ThemePicker from '@/components/ThemePicker/index.vue'

const settingsStore = useSettingsStore()

const { tagsView, fixedHeader, sidebarLogo, sideTheme, skinTheme } =
	storeToRefs(settingsStore)
const theme = computed(() => settingsStore.theme)

const handleTheme = (sideTheme: 'theme-light' | 'theme-dark') => {
	settingsStore.changeSettings('sideTheme', sideTheme)
}

const handleThemeChange = (themeColor: string) => {
	settingsStore.changeSettings('theme', themeColor)
}

const saveSetting = () => {
	console.log('baocun')
}
const resetSetting = () => {
	console.log('resetSetting')
}
</script>

<style scoped></style>
