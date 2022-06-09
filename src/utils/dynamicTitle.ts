import { useSettingsStore } from '@/store/modules/global/settings'
/**
 * 动态修改标题
 */
export function useDynamicTitle() {
	const store = useSettingsStore()
	if (store.title) {
		document.title = `Bison-` + store.title
	} else {
		document.title = 'Bison管理系统'
	}
}
