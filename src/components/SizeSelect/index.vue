<template>
	<div class="size-select">
		<el-dropdown trigger="click" @command="handleChange">
			<div class="size-icon--style">
				<svg-icon
					:class-name="props.iconName"
					:icon-class="props.iconName"
				></svg-icon>
			</div>
			<template #dropdown>
				<el-dropdown-menu>
					<el-dropdown-item
						v-for="item of dropdownOptions"
						:key="item.value"
						:disabled="selectedItem === item.value"
						:command="item.value"
						>{{ item.label }}</el-dropdown-item
					>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useAppStore } from '@/store/modules/global/app'
import { ElLoading } from 'element-plus'
import { sizeType } from '@/store/modules/global/types'

interface IProps<T = any> {
	iconName: string
	dropdownOptions: any
	selectedItem: any
}

const props = withDefaults(defineProps<IProps>(), {
	iconName: '',
	dropdownOptions: '',
	selectedItem: ''
})

const emits = defineEmits(['changeItem'])

const appStore = useAppStore()
const handleChange = (item) => {
	emits('changeItem', item)
}
</script>

<style lang="scss" scoped>
.size-icon--style {
	font-size: 18px;
	line-height: 50px;
	padding-right: 7px;
}
</style>
