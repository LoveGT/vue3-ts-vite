<template>
	<div class="screenfull">
		<svg-icon
			:icon-class="isFullscreen ? 'fullscreen' : 'exit-fullscreen'"
			@click="toggle"
		></svg-icon>
	</div>
</template>

<script lang="ts">
export default {
	name: 'Screenfull'
}
</script>

<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'
const { isFullscreen, enter, exit, toggle } = useFullscreen()
</script>

<style scoped>
.svg-icon {
	font-size: 20px;
}
</style>
