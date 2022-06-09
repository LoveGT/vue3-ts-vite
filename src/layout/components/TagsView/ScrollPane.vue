<template>
	<el-scrollbar
		ref="scrollContainerRef"
		:vertical="false"
		class="scroll-container"
		@wheel.prevent="handleScroll"
	>
		<slot />
	</el-scrollbar>
</template>

<script lang="ts">
export default {
	name: 'ScrollPane'
}
</script>
<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'
import { useTagsViewStore } from '@/store/modules/global/tagsView'
import { storeToRefs } from 'pinia'
import { ElScrollbar } from 'element-plus'

onMounted(() => {
	console.log(scrollContainerRef.value, 'scrollContainerRef')
	scrollWrapper.value!.addEventListener('scroll', emitScroll, true)
})
onBeforeUnmount(() => {
	scrollWrapper.value!.removeEventListener('scroll', emitScroll)
})

const emits = defineEmits(['scroll'])

const tagsViewStore = useTagsViewStore()
const { visitedViews } = storeToRefs(tagsViewStore)

const tagAndTagSpacing = ref(4)
const scrollContainerRef = ref<InstanceType<typeof ElScrollbar>>()

const scrollWrapper = computed(() => {
	return scrollContainerRef.value!.wrap$
})
// const { proxy } = getCurrentInstance()

// const scrollWrapper = computed(() => proxy.$refs.scrollContainer.$refs.wrap$)

const handleScroll = (e) => {
	const eventDelta = e.wheelDelta || -e.deltaY * 40
	const $scrollWrapper = scrollWrapper.value
	$scrollWrapper!.scrollLeft = $scrollWrapper!.scrollLeft + eventDelta / 4
}
const emitScroll = () => {
	emits('scroll')
}
const moveToTarget = (currentTag) => {
	const $container = scrollContainerRef.value?.$el
	const $containerWidth = $container.offsetWidth
	const $scrollWrapper = scrollWrapper.value

	let firstTag = null
	let lastTag = null

	// find first tag and last tag
	if (visitedViews.value.length > 0) {
		firstTag = visitedViews.value[0]
		lastTag = visitedViews.value[visitedViews.value.length - 1]
	}

	if (firstTag === currentTag) {
		$scrollWrapper!.scrollLeft = 0
	} else if (lastTag === currentTag) {
		$scrollWrapper!.scrollLeft = $scrollWrapper!.scrollWidth - $containerWidth
	} else {
		const tagListDom = document.getElementsByClassName('tags-view-item')
		const currentIndex = visitedViews.value.findIndex(
			(item) => item === currentTag
		)
		let prevTag
		let nextTag
		for (const k in tagListDom) {
			if (k !== 'length' && Object.hasOwnProperty.call(tagListDom, k)) {
				if (
					(tagListDom[k] as any).dataset.path ===
					visitedViews.value[currentIndex - 1].path
				) {
					prevTag = tagListDom[k]
				}
				if (
					(tagListDom[k] as any).dataset.path ===
					visitedViews.value[currentIndex + 1].path
				) {
					nextTag = tagListDom[k]
				}
			}
		}

		// the tag's offsetLeft after of nextTag
		const afterNextTagOffsetLeft =
			nextTag.offsetLeft + nextTag.offsetWidth + tagAndTagSpacing.value

		// the tag's offsetLeft before of prevTag
		const beforePrevTagOffsetLeft = prevTag.offsetLeft - tagAndTagSpacing.value
		if (afterNextTagOffsetLeft > $scrollWrapper!.scrollLeft + $containerWidth) {
			$scrollWrapper!.scrollLeft = afterNextTagOffsetLeft - $containerWidth
		} else if (beforePrevTagOffsetLeft < $scrollWrapper!.scrollLeft) {
			$scrollWrapper!.scrollLeft = beforePrevTagOffsetLeft
		}
	}
}
defineExpose({
	moveToTarget
})
</script>

<style scoped></style>
