import hyRequest from '@/service'
enum loginApi {
	TestLoginUrl = '/mock/auth/oauth/token',
	TestCodeUrl = '/mock/code'
}

// mock测试 code
export function testCode() {
	return hyRequest.get({
		url: loginApi.TestCodeUrl
	})
}

export function testLogin(account) {
	return hyRequest.post({
		url: loginApi.TestLoginUrl,
		params: account
	})
}
