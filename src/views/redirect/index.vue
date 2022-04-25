<script lang="ts">
import { defineComponent, h } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
	// created () {
	//   const { params, query } = this.$route
	//   const { path } = params
	//   this.$router.replace({ path: '/' + path, query })
	// },
	setup() {
		const route = useRoute()
		const router = useRouter()
		const { params, query } = route
		const { path } = params
		router.replace({ path: '/' + path, query })
	},
	render() {
		return h('div') // avoid warning message
	}
})
</script>
