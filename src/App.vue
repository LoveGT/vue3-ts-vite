<template>
  <div>
    app....
    <p>count: {{ indexStore.count }}</p>
    <p>counter: {{ counterStore.counter }}</p>
    <p>counter*3: {{ counterStore.doubleCounter }}</p>
    <button @click="indexStoreChange">修改state数据</button>
    <button @click="handleChange">修改countrstate数据</button>
    <el-button type="primary" size="small">primary</el-button>
    <el-icon>
      <edit />
    </el-icon>
		<div>11111</div>
    <!-- <router-link to="/404">跳转到登录页面</router-link>
		<router-view></router-view> -->
  </div>
</template>

<script setup lang="ts">
import { useIndexStore } from "@/store";
import { useCounterStore } from "@/store/counter";
// import { storeToRefs } from 'pinia'

const indexStore = useIndexStore();

const counterStore = useCounterStore();
// const { count, quantity, countTotal } = storeToRefs(indexStore)
const handleChange = () => {
  counterStore.increment();
};
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
  indexStore.countChange(1);
};
</script>

<style scoped></style>
