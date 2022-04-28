import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { HyRequsetConfig, HYRequestInterceptor } from './types'
import { data } from 'autoprefixer'

class HyRequset {
	instance: AxiosInstance
	interceptors?: HYRequestInterceptor

	constructor(config: HyRequsetConfig) {
		this.instance = axios.create(config)
		this.interceptors = config.interceptors
		// 1.局部拦截器
		this.instance.interceptors.request.use(
			this.interceptors?.requestInterceptor,
			this.interceptors?.requestInterceptorCatch
		)

		this.instance.interceptors.response.use(
			this.interceptors?.responseInterceptor,
			this.interceptors?.responseInterceptorCatch
		)

		// 2.全局拦截器
		this.instance.interceptors.request.use(
			(config) => {
				console.log('全局请求拦截成功')
				return config
			},
			(error) => {
				console.log('全局请求拦截失败')
				return error
			}
		)
		this.instance.interceptors.response.use(
			(response) => {
				console.log('全局响应拦截成功')
				const data = response.data
				if (data?.returnCode === '-1001') {
					console.log('请求失败，错误信息')
				} else {
					return data
				}
			},
			(error) => {
				console.log('全局响应拦截失败')
				console.log(error, 'error-response')
				if (error.response.status === 404) {
					console.log('404错误')
				}
				return error
			}
		)
	}

	request(config: HyRequsetConfig): void {
		// 3.单独请求 请求的拦截器
		if (config.interceptors?.requestInterceptor) {
			config = config.interceptors.requestInterceptor(config)
		}

		// 发送请求
		this.instance.request(config).then((response) => {
			if (config.interceptors?.responseInterceptor) {
				response = config.interceptors.responseInterceptor(response)
			}
			console.log(response, 'response')
		})
	}
}

export default HyRequset
