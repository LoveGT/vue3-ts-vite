<template>
	<div class="sidebar">
		<Logo v-if="showLogo" :collapse="isCollapse"></Logo>
		<el-scrollbar v-if="sidebarRouters.length" wrap-class="scrollbar-wrapper">
			<el-menu
				class="scrollbar-flex-content"
				mode="horizontal"
				:default-active="activeMenu"
				:collapse="isCollapse"
				:active-text-color="theme"
				@select="handleSelect"
			>
				<Sidebar-Item
					v-for="(route, index) in sidebarRouters"
					:key="route.path + index"
					:item="route"
					:base-path="route.path"
				></Sidebar-Item>
			</el-menu>
		</el-scrollbar>
		<Rightbar></Rightbar>
	</div>
</template>
<script lang="ts">
export default {
	name: 'Sidebar'
}
</script>
<script setup lang="ts">
import { computed, onMounted, watch, ref, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useMenuStore } from '@/store/modules/menu/menu'
import { useSettingsStore } from '@/store/modules/global/settings'
import { useAppStore } from '@/store/modules/global/app'
import { storeToRefs } from 'pinia'

import Logo from './Logo.vue'
import { Rightbar } from '../../components'
import SidebarItem from './SidebarItem.vue'
import variables from '@/assets/styles/variables.module.scss'

const route = useRoute()
const menuStore = useMenuStore()
const settingsStore = useSettingsStore()
const appStore = useAppStore()
// onMounted(async () => {
// 	await nextTick()
// 	const { sidebarRouters } = storeToRefs(menuStore)
// 	console.log(111111)
// 	console.log(sidebarRouters, 'sidebarRouters')
// })
const sidebarRouters = computed(() => {
	return menuStore.sidebarRouters
})
// await nextTick()
// const { sidebarRouters } = storeToRefs(menuStore)
const { theme } = storeToRefs(settingsStore)
const showLogo = computed(() => {
	return settingsStore.showSettings
})
const isCollapse = computed(() => {
	return !appStore.sidebar.opened
})

const activeMenu = computed(() => {
	const { meta, path } = route
	if (meta.activeMenu) {
		return meta.activeMenu as string
	} else {
		return path
	}
})
const handleSelect = (key: string, keyPath: string[]) => {
	console.log(key, 'key')
	let key2 = key
	console.log(key2)
}
</script>

<style scoped lang="scss"></style>
