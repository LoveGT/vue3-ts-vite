import router from '../../router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
import { useLoginStore } from '@/store/modules/login/login'
import { useMenuStore } from '@/store/modules/menu/menu'
import { useSettingsStore } from '@/store/modules/global/settings'
// import {Route} from 'vue-router'

NProgress.configure({ showSpinner: false })

const WhiteList = ['/login', '/auth-redirect', '/bind', '/register']

router.beforeEach(async (to, from) => {
	const loginStore = useLoginStore()
	const menuStore = useMenuStore()
	const settingsStore = useSettingsStore()
	NProgress.start()
	if (getToken()) {
		// 改变页面标题
		to.meta.title && settingsStore.setTitleAction(to.meta.title)
		// 前往登录页
		if (to.path === '/login') {
			NProgress.done()
			return '/'
		} else {
			if (loginStore.roles.length === 0) {
				// 再一次获取用户信息
				loginStore
					.getUserInfoAction()
					.then((res) => {
						menuStore.GenerateRoutesAction().then((accessRoutes) => {
							// 根据roles权限生成可访问的路由表
							accessRoutes.forEach((route) => {
								if (route.path) {
									router.addRoute(route) // 动态添加可访问路由表
								}
							})
							return { ...to, replace: true } // hack方法 确保addRoutes已完成
						})
					})
					.catch((err) => {
						loginStore.logoutAction().then(() => {
							return '/'
						})
					})
			} else {
				return true
			}
		}
	} else {
		if (WhiteList.indexOf(to.path) !== -1) {
			// 在免登录白名单，直接进入
			return true
		} else {
			NProgress.done()
			return `/login?redirect=${to.fullPath}` // 否则全部重定向到登录页
		}
	}
})

router.afterEach(() => {
	NProgress.done()
})
