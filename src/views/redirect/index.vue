<template>
	<div></div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
console.log(route, 'redirect-route')
const { params, query } = route
const { path } = params
console.log(path, 'path')

router.replace({ path: '/' + path, query })
</script>
