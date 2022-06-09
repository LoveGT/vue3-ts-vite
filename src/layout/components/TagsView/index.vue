<template>
	<div
		id="tags-view-container"
		ref="tagsViewRef"
		class="tags-view-container border bg-dark-500 h-10 leading-10 pl-2"
	>
		<scroll-pane
			ref="scrollPaneRef"
			class="tags-view-wrapper"
			@scroll="handleScroll"
		>
			<router-link
				v-for="tag in visitedViews"
				ref="tagRef"
				:key="tag.path"
				:data-path="tag.path"
				:class="isActive(tag) ? 'active' : ''"
				:to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
				class="tags-view-item w-10 py-1 px-2 mr-1 rounded-xl text-gray-500 border border-gray-400 text-sm cursor-pointer"
				:style="activeStyle(tag)"
				@contextmenu.prevent="openMenu(tag, $event)"
			>
				<span>
					{{ tag.title }}
				</span>
				<el-icon
					v-if="!isAffix(tag)"
					:size="15"
					class="align-middle ml-1"
					@click.prevent.stop="closeSelectedTag(tag)"
				>
					<close />
				</el-icon>
			</router-link>
		</scroll-pane>
		<ul
			v-show="visible"
			:style="{ left: leftPosition + 'px', top: topPosition + 'px' }"
			class="contextmenu"
		>
			<li @click="refreshSelectedTag(selectedTag)">刷新页面</li>
			<li v-if="!isAffix(selectedTag)" @click="closeSelectedTag(selectedTag)">
				关闭当前
			</li>
			<li @click="closeOthersTags(selectedTag)">关闭其他</li>
			<li v-if="!isLastView()" @click="closeRightTags(selectedTag)">
				关闭右侧
			</li>
			<li @click="closeAllTags(selectedTag)">关闭所有</li>
		</ul>
	</div>
</template>
<script lang="ts">
export default {
	name: 'TagsView'
}
</script>
<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

import { useTagsViewStore } from '@/store/modules/global/tagsView'
import { useSettingsStore } from '@/store/modules/global/settings'
import { useMenuStore } from '@/store/modules/menu/menu'
import { getNormalPath } from '@/utils/ruoyi'

import ScrollPane from './ScrollPane.vue'

const route = useRoute()
const router = useRouter()
const tagsViewStore = useTagsViewStore()
const settingsStore = useSettingsStore()
const menuStore = useMenuStore()

const { visitedViews } = storeToRefs(tagsViewStore)
const { routes } = storeToRefs(menuStore)
const { theme } = storeToRefs(settingsStore)

const tagsViewRef = ref<HTMLDivElement>()
const tagRef = ref<HTMLElement>()
const scrollPaneRef = ref<InstanceType<typeof ScrollPane>>()
const selectedTag = ref({})
const topPosition = ref(0)
const leftPosition = ref(0)
const visible = ref(false)
const affixTags: any = ref([])

const handleScroll = () => {
	closeMenu()
}
//是否固定tagview
const isAffix = (tag) => {
	return tag.meta && tag.meta.affix
}
//是否激活tagview
const isActive = (tag) => {
	return tag.path === route.path
}
// 激活的样式
const activeStyle = (tag) => {
	if (!isActive(tag)) return
	return {
		'background-color': theme.value,
		'border-color': theme.value,
		color: 'white'
	}
}
const isFirstView = () => {
	try {
		return (
			selectedTag.value.fullPath === visitedViews.value[1].fullPath ||
			selectedTag.value.fullPath === '/index'
		)
	} catch (error) {
		return false
	}
}
const isLastView = () => {
	try {
		return (
			selectedTag.value.fullPath ===
			visitedViews.value[visitedViews.value.length - 1].fullPath
		)
	} catch (err) {
		return false
	}
}
const filterAffixTags = (routes, basePath = '') => {
	let tags: any[] = []
	routes.forEach((route) => {
		if (route.meta && route.meta.affix) {
			const tagPath = getNormalPath(basePath + '/' + route.path)
			tags.push({
				fullPath: tagPath,
				path: tagPath,
				name: route.name,
				meta: { ...route.meta }
			})
		}
		if (route.children) {
			const tempTags: any = filterAffixTags(route.children, route.path)
			if (tempTags.length >= 1) {
				tags = [...tags, ...tempTags]
			}
		}
	})
	return tags
}
// 添加tagview
const addTags = () => {
	const { name } = route
	if (name) {
		tagsViewStore.addView(route)
	} else {
		return false
	}
}
// 移动到当前的tagview
const moveToCurrentTag = () => {
	const tags = visitedViews.value
	nextTick(() => {
		for (const tag of tags) {
			if (tag.path === route.path) {
				scrollPaneRef.value?.moveToTarget(tag)
			}
			// when query is different then update
			if (tag.fullPath !== route.fullPath) {
				tagsViewStore.updateVisitedView(route)
			}
		}
	})
}
// 刷新选中的tagsview
const refreshSelectedTag = (view) => {
	console.log(view, 'vew')
	tagsViewStore.delCachedView(view).then(() => {
		const { fullPath } = view
		nextTick(() => {
			router.replace({
				path: '/redirect' + fullPath
			})
		})
	})
}

// 关闭选中的tagsview
const closeSelectedTag = (view) => {
	tagsViewStore.delView(view).then(({ visitedViews }) => {
		if (isActive(view)) {
			toLastView(visitedViews, view)
		}
	})
}
// 关闭其他的tagsview
const closeOthersTags = (view) => {
	router.push(view)
	tagsViewStore.delOthersViews(view).then((res) => {
		tagsViewStore.delOthersCachedViews(view).then(() => {
			moveToCurrentTag()
		})
	})
}
// 关闭右侧的tagview
const closeRightTags = (view) => {
	tagsViewStore.delRightTags(view).then((visitedViews) => {
		// if (visitedViews.find((i) => i.fullPath === route.fullPath)) {
		toLastView(visitedViews)
		// }
	})
}
// 关闭所有的tagview
const closeAllTags = (view) => {
	tagsViewStore.dellAllViews(view).then(({ visitedViews }) => {
		if (affixTags.value.some((tag) => tag.path === route.path)) {
			return
		}
		toLastView(visitedViews, view)
	})
}
// 右键操作事件
const openMenu = (view, e) => {
	const menuMinWidth = 105
	// container margin left
	const offsetLeft = tagsViewRef.value?.getBoundingClientRect().left || 0
	// container width
	const offsetWidth = tagsViewRef.value?.offsetWidth || 0
	// left boundary
	const maxLeft = offsetWidth - menuMinWidth
	const left = e.clientX - offsetLeft + 15 // 15: margin right
	if (left > maxLeft) {
		leftPosition.value = maxLeft
	} else {
		leftPosition.value = left
	}
	topPosition.value = e.clientY - 50
	visible.value = true
	selectedTag.value = view
	console.log(selectedTag.value, 'selectedTag.value')
}
const toLastView = (visitedViews, view?) => {
	const latestView = visitedViews.slice(-1)[0]
	if (latestView) {
		router.push(latestView.fullPath)
	} else {
		// now the default is to redirect to the home page if there is no tags-view,
		// you can adjust it according to your needs.
		if (view.name === 'Dashboard') {
			// to reload home page
			router.replace({ path: '/redirect' + view.fullPath })
		} else {
			router.push('/')
		}
	}
}
// 初始化tagview
const initTags = () => {
	const res = filterAffixTags(routes.value)
	affixTags.value = res
	for (const tag of res) {
		if (tag.name) {
			tagsViewStore.addCachedView(tag)
		}
	}
}
const closeMenu = () => {
	visible.value = false
}
onMounted(() => {
	initTags()
	addTags()
})
watch(
	() => route,
	(route) => {
		addTags()
		console.log(route, 'route')
	},
	{
		deep: true
	}
)
watch(visible, (value) => {
	if (value) {
		document.body.addEventListener('click', closeMenu)
	} else {
		document.body.removeEventListener('click', closeMenu)
	}
})
</script>

<style scoped lang="scss">
.tags-view-container {
	.tags-view-wrapper {
		.tags-view-item {
			position: relative;
			&.active {
				&::before {
					content: '';
					background: #fff;
					display: inline-block;
					width: 8px;
					height: 8px;
					border-radius: 50%;
					position: relative;
					margin-right: 2px;
				}
			}
		}
	}
	.contextmenu {
		margin: 0;
		background: #fff;
		z-index: 3000;
		position: absolute;
		list-style-type: none;
		padding: 5px 0;
		border-radius: 4px;
		font-size: 12px;
		font-weight: 400;
		color: #333;
		box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
		li {
			margin: 0;
			padding: 2px 16px;
			cursor: pointer;
			&:hover {
				background: #eee;
			}
		}
	}
}
</style>
