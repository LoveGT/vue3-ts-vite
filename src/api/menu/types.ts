import type { RouteComponent } from 'vue-router'

export interface GetRoutesDataType {
	code: number
	msg: string
	data: IDataType[]
	[propsName: string]: any
}

export interface IDataType {
	name: string
	path: string
	hidden: boolean
	redirect: string
	component: string | RouteComponent
	alwaysShow: boolean
	meta: IMetaType
	children: any[]
}

export interface IMetaType {
	title: string
	icon: string
	noCache: boolean
}
