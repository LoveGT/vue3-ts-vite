import hyRequest from '@/service'
enum UserApi {
	userList = '/mock/system/user/list'
}

// 查询用户列表
export function listUser(query) {
	return hyRequest.get({
		url: UserApi.userList,
		params: query
	})
}
