<template>
	<div v-if="!item.hidden">
		<!-- 菜单项 -->
		<template
			v-if="
				hasOneShowingChild(item.children, item) &&
				(!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
				!item.alwaysShow
			"
		>
			<app-link
				v-if="onlyOneChild.meta"
				:to="resolvePath(onlyOneChild.path, onlyOneChild.query)"
			>
				<el-menu-item
					:index="resolvePath(onlyOneChild.path)"
					:class="{ 'submenu-title-noDropdown': !isNest }"
				>
					<svg-icon
						:icon-class="
							onlyOneChild.meta.icon || (item.meta && item.meta.icon)
						"
					/>
					<template #title
						><span
							class="menu-title"
							:title="hasTitle(onlyOneChild.meta.title)"
						>
							{{ onlyOneChild.meta.title }}</span
						>
					</template>
				</el-menu-item>
			</app-link>
		</template>
		<!-- 目錄項 -->
		<el-sub-menu
			v-else
			ref="subMenu"
			:index="resolvePath(item.path)"
			popper-append-to-body
		>
			<template v-if="item.meta" #title>
				<svg-icon :icon-class="item.meta && item.meta.icon" />
				<span class="menu-title" :title="hasTitle(item.meta.title)">{{
					item.meta.title
				}}</span>
			</template>
			<sidebar-item
				v-for="child in item.children"
				:key="child.path"
				:is-nest="true"
				:item="child"
				:base-path="resolvePath(child.path)"
				class="nest-menu"
			/>
		</el-sub-menu>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { isExternal } from '@/utils/validate'
import { getNormalPath } from '@/utils/ruoyi'
import AppLink from './AppLink.vue'

interface IItem {
	alwaysShow?: boolean
	path: string
	component: any
	hidden?: boolean
	children?: any[]
	meta: any
	name: string
	redirect?: string
}
interface IProps {
	item: IItem
	isNest?: boolean
	basePath: string
}
const props = withDefaults(defineProps<IProps>(), {
	item: () => ({
		alwaysShow: false,
		path: '',
		component: null,
		hideen: false,
		children: [],
		meta: {},
		name: '',
		redirect: ''
	}),
	isNest: false,
	basePath: ''
})

const onlyOneChild = ref({})
const hasOneShowingChild = (children = [], parent) => {
	if (!children) {
		children = []
	}
	const showingChildren = children.filter((item: any) => {
		if (item.hidden) {
			return false
		} else {
			// Temp set(will be used if only has one showing child)
			onlyOneChild.value = item
			return true
		}
	})
	// When there is only one child router, the child router is displayed by default
	if (showingChildren.length === 1) {
		return true
	}
	// Show parent if there are no child router to display
	if (showingChildren.length === 0) {
		onlyOneChild.value = { ...parent, path: '', noShowingChildren: true }
		return true
	}

	return false
}

const resolvePath = (routePath: string, routeQuery?: any) => {
	if (isExternal(routePath)) {
		return routePath
	}
	if (isExternal(props.basePath)) {
		return props.basePath
	}
	if (routeQuery) {
		const query = JSON.parse(routeQuery)
		return {
			path: getNormalPath(props.basePath + '/' + routePath),
			query: query
		}
	}

	return getNormalPath(props.basePath + '/' + routePath)
}
const hasTitle = (title: string) => {
	if (title.length > 5) {
		return title
	} else {
		return ''
	}
}
</script>

<style scoped lang="scss"></style>
