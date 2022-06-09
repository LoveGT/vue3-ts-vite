<template>
	<el-drawer
		v-model="showSettings"
		:with-header="false"
		:direction="props.direction"
		:size="props.size"
	>
		<slot></slot>
	</el-drawer>
</template>

<script lang="ts">
export default {
	name: 'RightPanel'
}
</script>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '@/store/modules/global/settings'

type Direction = 'ltr' | 'rtl' | 'ttb' | 'btt'
interface IPropsType {
	direction: Direction
	size: number | string
}
const props = withDefaults(defineProps<IPropsType>(), {
	direction: 'rtl',
	size: '30%'
})

const settingsStore = useSettingsStore()
const { showSettings } = storeToRefs(settingsStore)
</script>
<style>
.showRightPanel {
	overflow: hidden;
	position: relative;
	width: calc(100% - 15px);
}
</style>
<style lang="scss" scoped></style>
