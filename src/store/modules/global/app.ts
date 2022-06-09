import { defineStore } from 'pinia'
import Cookies from 'js-cookie'

import { IAppType, sizeType, deviceType } from './types'

export const useAppStore = defineStore('appStore', {
	state: (): IAppType => {
		return {
			sidebar: {
				opened: Cookies.get('sidebarStatus')
					? !!+Cookies.get('sidebarStatus')
					: true,
				withoutAnimation: false,
				hide: false
			},
			device: 'desktop',
			size: Cookies.get('size') || 'default',
			lang: Cookies.get('lang') || 'en'
		}
	},
	actions: {
		toggleSideBar() {
			if (this.sidebar.hide) {
				return false
			}
			this.sidebar.opened = !this.sidebar.opened
			this.sidebar.withoutAnimation = false
			if (this.sidebar.opened) {
				Cookies.set('sidebarStatus', 1)
			} else {
				Cookies.set('sidebarStatus', 0)
			}
		},
		closeSideBar(payload: boolean) {
			Cookies.set('sidebarStatus', 0)
			this.sidebar.opened = false
			this.sidebar.withoutAnimation = payload
		},
		toggleDevice(payload: deviceType) {
			this.device = payload
		},
		setSize(payload: sizeType) {
			Cookies.set('size', payload)
			this.size = payload
		},
		setLanguage(payload: string) {
			Cookies.set('lang', payload)
			this.lang = payload
		},
		toggleSideBarHide(payload: boolean) {
			this.sidebar.hide = payload
		}
	},
	// 开启数据缓存
	persist: {
		enabled: true
	}
})
