/**
 * v-hasRole 角色权限处理
 */

import { useLoginStore } from '@/store/modules/login/login'

export default {
	mounted(el, binding, vnode) {
		const loginStore = useLoginStore()
		const { value } = binding
		const super_admin = 'admin'
		const roles = loginStore.roles

		if (value && value instanceof Array && value.length > 0) {
			const roleFlag = value

			const hasRole = roles.some((role) => {
				return super_admin === role || roleFlag.includes(role)
			})

			if (!hasRole) {
				el.parentNode && el.parentNode.removeChild(el)
			}
		} else {
			throw new Error(`请设置角色权限标签值"`)
		}
	}
}
