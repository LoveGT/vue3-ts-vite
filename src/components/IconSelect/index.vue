<template>
	<div class="icon-body">
		<el-input
			v-model="iconName"
			style="position: relative"
			clearable
			placeholder="请输入图标名称"
			@clear="filterIcons"
			@input="filterIcons"
		>
			<template #suffix>
				<el-icon class="el-input__icon"><search /></el-icon>
			</template>
		</el-input>
		<div class="icon-list">
			<div
				v-for="(item, index) in iconList"
				:key="index"
				@click="selectedIcon(item)"
			>
				<svg-icon
					:icon-class="item"
					style="height: 30px; width: 16px"
				></svg-icon>
				<span>{{ item }}</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineExpose } from 'vue'
import icons from './requireIcons'

const iconName = ref('')
const iconList = ref(icons)
const emit = defineEmits(['selected'])

const filterIcons = () => {
	iconList.value = icons
	if (iconName.value) {
		iconList.value = icons.filter((item) => item.indexOf(iconName.value) !== -1)
	}
}

const selectedIcon = (name) => {
	emit('selected', name)
	document.body.click()
}

const reset = () => {
	iconName.value = ''
	iconList.value = icons
}

defineExpose({
	reset
})
</script>

<style scoped></style>
