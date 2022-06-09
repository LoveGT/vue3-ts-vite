import HyRequset from './request/request'
import { getToken } from '@/utils/auth'

const hyRequest = new HyRequset({
	baseURL: import.meta.env.VITE_APP_BASE_API,
	timeout: 6000,
	interceptors: {
		requestInterceptor: (config) => {
			const token = getToken()
			if (token && config && config.headers) {
				config.headers.Authorization = `Bearer ${token}`
			}
			return config
		},
		requestInterceptorCatch: (err) => {
			return err
		},
		responseInterceptor: (response) => {
			return response
		},
		responseInterceptorCatch: (err) => {
			return err
		}
	}
})
export default hyRequest
