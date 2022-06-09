import { useLoginStore } from '@/store/modules/login/login'

/**
 * 字符权限校验
 * @param {Array} value 校验值
 * @returns {Boolean}
 */
const loginStore = useLoginStore()
export function checkPermi(value: any[]): boolean {
	if (value && value instanceof Array && value.length > 0) {
		const permissions = loginStore.permissions
		const permissionsDatas = value
		const all_perimission = '*:*:*'
		const hasPermission = permissions.some((permission) => {
			return (
				all_perimission === permission || permissionsDatas.includes(permission)
			)
		})
		if (!hasPermission) {
			return false
		}
		return true
	} else {
		console.error(
			`need roles! Like checkPermi="['system:user:add','system:user:edit']"`
		)
		return false
	}
}

/**
 * 角色权限校验
 * @param {Array} value 校验值
 * @returns {Boolean}
 */
export function checkRole(value: string[]): boolean {
	if (value && value instanceof Array && value.length > 0) {
		const roles = loginStore.roles
		const permissionRoles = value
		const super_admin = 'admin'
		const hasRole = roles.some((role) => {
			return (super_admin = role || permissionRoles.includes(role))
		})

		if (!hasRole) {
			return false
		}
		return true
	} else {
		console.error(`need roles! Like checkRole="['admin','editor']"`)
		return false
	}
}
