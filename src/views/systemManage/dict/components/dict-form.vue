<template>
	<div class="form-container dict-form bg-white">
		<el-form :inline="true" :model="queryParams">
			<el-form-item label="字典名称" prop="dictName">
				<el-input v-model="queryParams.dictName" placeholder="字典名称" />
			</el-form-item>
			<el-form-item label="字典类型" prop="dictName">
				<el-input v-model="queryParams.dictType" placeholder="字典类型" />
			</el-form-item>
			<el-form-item label="状态" prop="status">
				<el-select
					v-model="queryParams.dictType"
					placeholder="字典状态"
					clearable
					size="small"
				>
					<el-option
						v-for="dict in statusOptions"
						:key="dict.dictValue"
						:label="dict.dictLabel"
						:value="dict.dictValue"
					/>
				</el-select>
			</el-form-item>
			<el-form-item label="创建时间">
				<el-date-picker
					v-model="dateRange"
					size="small"
					style="width: 240px"
					value-format="yyyy-MM-dd"
					type="daterange"
					range-separator="-"
					start-placeholder="开始日期"
					end-placeholder="结束日期"
				></el-date-picker>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" size="small" @click="handleQuery"
					>搜索</el-button
				>
			</el-form-item>
		</el-form>
	</div>
</template>

<script setup lang="ts" name="DictForm">
import { reactive, ref } from 'vue'
interface IstatusOptions {
	dictLabel: string
	dictValue: string
	[propsName: string]: any
}
const queryParams = reactive({
	dictName: '',
	dictType: '',
	status: '',
	pageSize: 30,
	pageNum: 1,
	beginTime: '',
	endTime: ''
})
const dateRange = ref([])
const statusOptions = ref<IstatusOptions[]>([])
const handleQuery = () => {
	console.log(1111)
}
</script>

<style scoped></style>
