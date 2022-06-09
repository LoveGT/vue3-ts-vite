import { createRouter, createWebHistory } from 'vue-router'
import type { HYRouteRecordRaw } from './types'

import Layout from '../layout/index.vue'

export const constantRoutes: HYRouteRecordRaw[] = [
	{
		path: '/redirect',
		component: Layout,
		hidden: true,
		children: [
			{
				path: '/redirect/:pathMatch(.*)',
				component: () => import('@/views/redirect/index.vue')
			}
		]
	},
	{
		path: '/login',
		name: 'login',
		hidden: true,
		component: () => import('@/views/login/login.vue')
	},
	{
		path: '/:pathMatch(.*)*',
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
		redirect: '/index',
		hidden: true,
		children: [
			{
				path: '/index',
				component: () =>
					import(/* webpackChunkName: "dashboard" */ '@/views/index.vue'),
				name: 'index',
				meta: {
					title: 'dashboard',
					icon: 'dashboard',
					affix: true,
					name: 'index'
				}
			}
		]
	}
]

const router = createRouter({
	routes: constantRoutes,
	history: createWebHistory(),
	scrollBehavior(to, from, savePositiong) {
		if (savePositiong) {
			return savePositiong
		} else {
			return { top: 0 }
		}
	}
})

export default router
