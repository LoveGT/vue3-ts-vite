<template>
	<div>
		app....
		<p>count: {{ indexStore.count }}</p>
		<p>counter: {{ counterStore.counter }}</p>
		<p>counter*3: {{ counterStore.doubleCounter }}</p>
		<button @click="indexStoreChange">修改state数据</button>
		<button @click="handleChange">修改countrstate数据</button>
		<el-button type="primary" size="small">primary</el-button>
		<el-row class="mb-4">
			<el-button round>Round</el-button>
			<el-button type="primary" round>Primary</el-button>
			<el-button type="success" round>Success</el-button>
			<el-button type="info" round>Info</el-button>
			<el-button type="warning" round>Warning</el-button>
			<el-button type="danger" round>Danger</el-button>
		</el-row>
		<el-icon>
			<edit />
		</el-icon>
		<div>11111</div>
		<p>hello world</p>
		<el-button
			v-loading.fullscreen.lock="fullscreenLoading"
			type="primary"
			@click="openFullScreen1"
		>
			As a directive
		</el-button>
		<el-button type="primary" @click="openFullScreen2"> As a service </el-button>
		<!-- <router-link to="/404">跳转到登录页面</router-link>
		<router-view></router-view> -->
	</div>
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store'
import { useCounterStore } from '@/store/counter'
// import { storeToRefs } from 'pinia'
import { ElLoading } from 'element-plus'
import { ref } from 'vue'

const fullscreenLoading = ref(false)
const openFullScreen1 = () => {
	fullscreenLoading.value = true
	setTimeout(() => {
		fullscreenLoading.value = false
	}, 2000)
}

const openFullScreen2 = () => {
	const loading = ElLoading.service({
		lock: true,
		text: 'Loading',
		background: 'rgba(0, 0, 0, 0.7)'
	})
	setTimeout(() => {
		loading.close()
	}, 2000)
}
const indexStore = useIndexStore()

const counterStore = useCounterStore()
// const { count, quantity, countTotal } = storeToRefs(indexStore)
const handleChange = () => {
	counterStore.increment()
}
const indexStoreChange = () => {
	// // 方式一： 最简单的方式就是这样
	// indexStore.count++
	// indexStore.quantity++

	// // 方式二：如果修改多个数据，建议使用 $patch 批量更新
	// indexStore.$patch({
	//   count: indexStore.count + 1,
	//   quantity: indexStore.quantity + 1
	// })

	// // 方式三（推荐都使用这个就好）： 更好的批量更新的方式： $patch 一个函数  这种性能更好
	// indexStore.$patch(state => {
	//   state.count++
	//   state.quantity++
	// })

	// 方式四： 逻辑比较多的时候  可以状态到 actions 中  调用 actions中的方法处理
	indexStore.countChange(1)
}
</script>

<style scoped lang="scss">
div {
	color: $primary-color;
}
</style>
