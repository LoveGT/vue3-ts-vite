export default [
	{
		url: '/dev-api/api/login',
		methods: 'post',
		timeout: 1000,
		statusCode: 200,
		response: {
			code: 200,
			message: '登陆成功',
			data: {
				name: 'petter',
				email: '646101390@qq.com'
			}
		}
	}
]
