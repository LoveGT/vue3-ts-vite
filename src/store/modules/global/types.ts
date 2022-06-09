export interface ISettingsType {
	title: string
	theme: string
	skinTheme: string
	sideTheme: string
	showSettings: boolean
	tagsView: boolean
	fixedHeader: boolean
	sidebarLogo: boolean
}

export interface ITagsViewType {
	visitedViews: any[]
	cachedViews: any[]
}

export interface IAppType {
	device: deviceType
	sidebar: {
		opened: boolean
		withoutAnimation: boolean
		hide: boolean
	}
	size: sizeType
	lang: string
}

export type sizeType = 'default' | 'large' | 'small'
export type deviceType = 'desktop' | 'mobile'
