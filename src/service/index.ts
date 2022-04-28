import HyRequset from './request/request'

const hyRequest = new HyRequset({
	baseURL: 'http://123.207.32.32:8000/',
	timeout: 6000,
	interceptors: {
		requestInterceptor: (config) => {
			const token = ''
			if (token && config && config.headers) {
				config.headers.Authorization = `Bearer ${token}`
			}
			console.log('实例请求成功的拦截')
			return config
		},
		requestInterceptorCatch: (err) => {
			console.log('实例请求失败的拦截')
			return err
		},
		responseInterceptor: (response) => {
			console.log('实例响应成功的拦截')
			return response
		},
		responseInterceptorCatch: (err) => {
			console.log('实例响应失败的拦截')
			return err
		}
	}
})
export default hyRequest
