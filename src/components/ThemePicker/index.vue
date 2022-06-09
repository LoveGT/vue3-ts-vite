<template>
	<el-color-picker
		v-model="theme"
		show-alpha
		:predefine="predefineColors"
		@change="themeChange"
	/>
	<p>{{ theme }}</p>
</template>

<script lang="ts">
export default { name: 'ThemePicker' }
</script>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useSettingsStore } from '@/store/modules/global/settings'

const settingsStore = useSettingsStore()
const emits = defineEmits(['themeChange'])

const theme = computed(() => settingsStore.theme)
const predefineColors = ref([
	'#409EFF',
	'#ff4500',
	'#ff8c00',
	'#ffd700',
	'#90ee90',
	'#00ced1',
	'#1e90ff',
	'#c71585'
])
const themeChange = (theme) => {
	emits('themeChange', theme)
}
</script>
