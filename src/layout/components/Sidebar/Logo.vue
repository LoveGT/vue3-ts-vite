<template>
	<div
		class="sidebar-logo-container"
		:class="{ collapse: collapse }"
		:style="{
			backgroundColor:
				sideTheme === 'theme-dark'
					? variables.menuBackground
					: variables.menuLightBackground
		}"
	>
		<transition name="sidebarLogoFade">
			<router-link v-if="collapse" class="sidebar-logo-link" to="/">
				<img :src="logo" class="sidebar-logo" />
				<h1
					class="sidebar-title"
					:style="{
						color:
							sideTheme === 'theme-dark'
								? variables.sidebarTitle
								: variables.sidebarLightTitle
					}"
				>
					{{ title }}
				</h1>
			</router-link>
			<router-link v-else key="expand" class="sidebar-logo-link" to="/">
				<img v-if="logo" :src="logo" class="sidebar-logo" />
				<h1
					class="sidebar-title"
					:style="{
						color:
							sideTheme === 'theme-dark'
								? variables.logoTitleColor
								: variables.logoLightTitleColor
					}"
				>
					{{ title }}
				</h1>
			</router-link>
		</transition>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '@/store/modules/global/settings'

import logo from '@/assets/logo/logo.png'
import variables from '@/assets/styles/variables.module.scss'

interface IProps {
	collapse?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
	collapse: false //是否折叠
})
const settingsStore = useSettingsStore()
const { sideTheme } = storeToRefs(settingsStore)
const title = ref('Bison管理系统 V3.5.2')
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
	transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
	opacity: 0;
}

.sidebar-logo-container {
	position: relative;
	width: 250px;
	height: 50px;
	line-height: 50px;
	background: #2b2f3a;
	text-align: center;
	overflow: hidden;

	& .sidebar-logo-link {
		display: flex;
		align-items: center;
		height: 100%;
		width: 100%;

		& .sidebar-logo {
			width: 32px;
			height: 32px;
			vertical-align: middle;
			margin-right: 12px;
		}

		& .sidebar-title {
			display: inline-block;
			margin: 0;
			color: #fff;
			font-weight: 600;
			line-height: 50px;
			font-size: 14px;
			font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
			vertical-align: middle;
		}
	}

	&.collapse {
		.sidebar-logo {
			margin-right: 0px;
		}
	}
}
</style>
