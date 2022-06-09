export default function () {
	//可以不用 插件已经实现
	const icons: string[] = []
	const modules = import.meta.glob('@/assets/icons/svg/*.svg')

	for (const path in modules) {
		const p: string = path.split('assets/icons/svg/')[1].split('.svg')[0]
		icons.push(p)
	}
	return icons
}
