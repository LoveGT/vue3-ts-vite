import hyRequest from '@/service'
import { GetRoutesDataType } from './types'
enum menuApi {
	GetRouters = '/system/menu/getRouters'
}
// 获取动态路由
export function getRouterRequest() {
	return hyRequest.get<GetRoutesDataType>({ url: menuApi.GetRouters })
}
