import { createPinia, defineStore } from 'pinia'
import { getRouterRequest } from '@/api/menu/menu'
import { constantRoutes } from '@/router'

import Layout from '@/layout/index.vue'
import ParentView from '@/components/parentView/index.vue'

import { HYRouteRecordRaw } from '@/router/types'
import { IMenuState } from './types'
import { IDataType } from '@/api/menu/types'

// console.log(constantRoutes, 'constantRoutes')
// 匹配views里面所有的.vue文件
const modules = import.meta.glob('@/views/**/*.vue')

export const useMenuStore = defineStore('menu', {
	state: (): IMenuState => {
		return {
			routes: [],
			addRoutes: [],
			sidebarRouters: []
		}
	},
	getters: {},
	actions: {
		// 生成路由
		GenerateRoutesAction() {
			return new Promise<HYRouteRecordRaw[]>((resolve, reject) => {
				// 向后端请求路由数据
				getRouterRequest().then((res) => {
					const sdata: IDataType[] = JSON.parse(JSON.stringify(res.data))
					const rdata: IDataType[] = JSON.parse(JSON.stringify(res.data))

					const sidebarRoutes: HYRouteRecordRaw[] = filterAsyncRouter(sdata)
					const rewriteRoutes: HYRouteRecordRaw[] = filterAsyncRouter(
						rdata,
						true
					)
					rewriteRoutes.push({
						path: '/:pathMatch(.*)*',
						redirect: '/404',
						hidden: true
					})

					this.routes = constantRoutes.concat(rewriteRoutes)
					this.addRoutes = rewriteRoutes
					this.sidebarRouters = constantRoutes.concat(sidebarRoutes)

					resolve(rewriteRoutes)
				})
			})
		}
	}
})

// 遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRouter(asyncRouterMap: IDataType[], isRewrite?: boolean) {
	return asyncRouterMap.filter((route) => {
		if (isRewrite && route.children) {
			/* 路径的拼装 */
			route.children = filterChildren(route.children)
		}
		if (route.component) {
			// Layout ParentView 组件特殊处理
			if (route.component === 'Layout') {
				route.component = Layout
			} else if (route.component === 'ParentView') {
				route.component = ParentView
			} else {
				route.component = loadView(route.component)
			}
		}
		if (route.children !== null && route.children && route.children.length) {
			/* 原来的 */
			// route.children = filterAsyncRouter(route.children, route, isRewrite)
			/* 修改 */
			route.children = filterAsyncRouter(route.children, isRewrite)
		}
		return true
	})
}

function filterChildren(childrenMap) {
	let children: any = []
	childrenMap.forEach((el, index) => {
		if (el.children && el.children.length) {
			if (el.component === 'ParentView') {
				el.children.forEach((c) => {
					c.path = el.path + '/' + c.path
					if (c.children && c.children.length) {
						/* 修改前 */
						// children = children.concat(filterChildren(c.children, c))
						/* 修改后 */
						children = children.concat(filterChildren([c]))
						return
					}
					children.push(c)
				})
				return
			}
		}
		children = children.concat(el)
	})
	return children
}

export const loadView = (view) => {
	let res
	for (const path in modules) {
		const dir = path.split('views/')[1].split('.vue')[0]
		if (dir === view) {
			res = () => modules[path]()
		}
	}
	return res
}
