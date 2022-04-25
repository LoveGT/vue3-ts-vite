import { createRouter, createWebHashHistory } from 'vue-router'
import type { HYRouteRecordRaw } from './type'

import Layout from '../layout/index.vue'

const routes: HYRouteRecordRaw[] = [
	{
		path: '/redirect',
		component: Layout,
		hidden: true,
		children: [
			{
				path: '/redirect/:path(.*)',
				component: () => import('@/views/redirect/index.vue')
			}
		]
	},
	{
		path: '/login',
		hidden: true,
		component: () => import(/* webpackChunkName: "login" */ '@/views/login/login.vue')
	},
	{
		path: '/404',
		component: () => import('@/views/errorPage/404.vue'),
		hidden: true
	},
	{
		path: '/401',
		component: () => import('@/views/errorPage/401.vue'),
		hidden: true
	},
	{
		path: '',
		component: Layout,
		redirect: 'index',
		hidden: true,
		meta: { hidden: true },
		children: [
			{
				path: 'index',
				component: () =>
					import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/dashboard.vue'),
				name: 'dashboard',
				meta: { title: 'dashboard', icon: 'dashboard', affix: true }
			}
		]
	}
]

const router = createRouter({
	routes,
	history: createWebHashHistory()
})

export default router
