<template>
	<section class="app-main">
		<div class="tabsTop">
			<tags-view v-if="needTagsView" />
		</div>
		<router-view v-slot="{ Component, route }" class="content-container">
			<transition name="fade-transform" mode="out-in">
				<keep-alive :include="cachedViews">
					<component :is="Component" :key="route.path" />
				</keep-alive>
			</transition>
		</router-view>
	</section>
</template>
<script lang="ts">
export default {
	name: 'AppMain'
}
</script>
<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '@/store/modules/global/settings'
import { useTagsViewStore } from '@/store/modules/global/tagsView'

import { TagsView } from '../index'

const settingsStore = useSettingsStore()
const tagsViewStore = useTagsViewStore()

const needTagsView = computed(() => settingsStore.tagsView)
const { cachedViews } = storeToRefs(tagsViewStore)
</script>

<style lang="scss" scoped>
.app-main {
	/* 50= navbar  50  */
	// min-height: calc(100vh - 60px);
	// min-height: 100vh;
	width: 100%;
	position: relative;
	overflow: hidden;
}

.fixed-header + .app-main {
	padding-top: 50px;
}

.hasTagsView {
	.app-main {
		/* 84 = navbar + tags-view = 57 + 40 */
		// min-height: calc(100vh - 97px);
		height: 100%;
		display: flex;
		flex-direction: column;
		.content-container {
			position: absolute;
			top: 40px;
			bottom: 0;
			left: 0;
			right: 0;
		}
	}

	.fixed-header + .app-main {
		padding-top: 84px;
	}
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
	.fixed-header {
		padding-right: 17px;
	}
}
</style>
