<template>
	<div class="app-wrapper" :class="classObj">layout</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {
		return {
			size: 20,
			color: 'red'
		}
	}
})
</script>

<style scoped lang="scss">
.layout {
	color: red;
}
</style>
