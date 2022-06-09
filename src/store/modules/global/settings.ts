import { defineStore } from 'pinia'
import defaultSettings from '@/layout/settings'
import { useDynamicTitle } from '@/utils/dynamicTitle'
const { sideTheme, showSettings, tagsView, fixedHeader, sidebarLogo } =
	defaultSettings

import { ISettingsType } from './types'

export const useSettingsStore = defineStore('settings', {
	state: (): ISettingsType => {
		return {
			title: '',
			theme: '#409EFF',
			skinTheme: 'theme-light',
			sideTheme: sideTheme,
			showSettings: showSettings,
			tagsView: tagsView,
			fixedHeader: fixedHeader,
			sidebarLogo: sidebarLogo
		}
	},
	actions: {
		setTitleAction(title) {
			this.title = title
			useDynamicTitle()
		},
		changeSettings(stateKey, payload) {
			this[stateKey] = payload
		}
	},
	// 开启数据缓存
	persist: {
		enabled: true
	}
})
