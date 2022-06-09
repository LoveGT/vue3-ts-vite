<template>
	<div>
		<component :is="type" v-bind="linkProps()"><slot /></component>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { isExternal } from '@/utils/validate'
interface IProps {
	to: string
}
const props = withDefaults(defineProps<IProps>(), {
	to: ''
})

const isExt = computed(() => {
	return isExternal(props.to)
})

const type = computed(() => {
	if (isExt.value) {
		return 'a'
	}
	return 'router-link'
})
const linkProps = () => {
	if (isExt.value) {
		return {
			href: props.to,
			target: '_blank',
			rel: 'noopener'
		}
	}
	return {
		to: props.to
	}
}
</script>

<style scoped></style>
