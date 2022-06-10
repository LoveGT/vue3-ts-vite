<template>
	<div
		class="app-wrapper"
		:class="classObj"
		:style="{ '--current-color': theme }"
	>
		<Sidebar class="sidebar-container"></Sidebar>
		<div class="main-container" :class="{ hasTagsView: needTagsView }">
			<AppMain class="bg-gray-100"></AppMain>
			<right-panel size="300px" direction="rtl">
				<settings></settings>
			</right-panel>
		</div>
	</div>
</template>
<script lang="ts">
export default {
	name: 'Layout'
}
</script>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '@/store/modules/global/settings'
import { AppMain, Sidebar, Settings, RightPanel } from './components'

const settingsStore = useSettingsStore()
const { theme, tagsView } = storeToRefs(settingsStore)
const needTagsView = computed(() => tagsView)
const classObj = ref('')
</script>

<style lang="scss" scoped>
.app-wrapper {
	position: relative;
	height: 100%;
	width: 100%;
	.main-container {
		// min-height: 100%;
		height: calc(100% - 60px);
		transition: margin-left 0.28s;
		// margin-left: $sideBarWidth;
		position: relative;
	}
}
</style>
