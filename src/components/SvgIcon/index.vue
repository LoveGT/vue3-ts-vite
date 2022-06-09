<template>
	<svg :class="svgClass" aria-hidden="true">
		<use :xlink:href="iconName" :fill="color" />
	</svg>
</template>
<script lang="ts">
export default {
	name: 'SvgIcon'
}
</script>
<script setup lang="ts" name="SvgIcon">
import { computed } from 'vue'

interface IProps {
	iconClass: string
	className?: string
	color?: string
}
const props = withDefaults(defineProps<IProps>(), {
	iconClass: '',
	className: '',
	color: ''
})
const iconName = computed(() => `#icon-${props.iconClass}`)
const svgClass = computed(() => {
	if (props.className) {
		return `svg-icon ${props.className}`
	} else {
		return `svg-icon`
	}
})
</script>

<style scope lang="scss">
.sub-el-icon,
.nav-icon {
	display: inline-block;
	font-size: 15px;
	margin-right: 12px;
	position: relative;
}

.svg-icon {
	width: 1em;
	height: 1em;
	position: relative;
	fill: currentColor;
	vertical-align: -2px;
}
</style>
