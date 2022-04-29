import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { HyRequsetConfig, HYRequestInterceptor } from './types'

import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const DEFAULT_LOADING = true

class HyRequset {
	instance: AxiosInstance
	interceptors?: HYRequestInterceptor
	showLoading: boolean
	loading?: LoadingInstance

	constructor(config: HyRequsetConfig) {
		this.instance = axios.create(config)
		this.showLoading = config.showLoading ?? DEFAULT_LOADING
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
				if (this.showLoading) {
					NProgress.start()
					this.loading = ElLoading.service({
						lock: true,
						text: 'Loading',
						background: 'rgba(0, 0, 0, 0.7)'
					})
				}

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

				this.loading?.close()
				NProgress.done()

				const data = response.data
				if (data?.returnCode === '-1001') {
					console.log('请求失败，错误信息')
				} else {
					return data
				}
			},
			(error) => {
				this.loading?.close()
				NProgress.done()
				console.log('全局响应拦截失败')
				if (error.response.status === 404) {
					console.log('404错误')
				}
				return error
			}
		)
	}

	request<T>(config: HyRequsetConfig<T>): Promise<T> {
		return new Promise((resolve, reject) => {
			// 3.单独请求 请求的拦截器
			if (config.interceptors?.requestInterceptor) {
				config = config.interceptors.requestInterceptor(config)
			}

			if (config.showLoading === false) {
				this.showLoading = config.showLoading
			}

			// 发送请求
			this.instance
				.request<any, T>(config)
				.then((response) => {
					if (config.interceptors?.responseInterceptor) {
						response = config.interceptors.responseInterceptor(response)
					}
					console.log(response, 'response')
					this.showLoading = DEFAULT_LOADING
					resolve(response)
				})
				.catch((error) => {
					this.showLoading = DEFAULT_LOADING
					reject(error)
					return error
				})
		})
	}
	get<T>(config: HyRequsetConfig<T>): Promise<T> {
		return this.request<T>({ ...config, method: 'GET' })
	}
	post<T>(config: HyRequsetConfig<T>): Promise<T> {
		return this.request<T>({ ...config, method: 'POST' })
	}
	delete<T>(config: HyRequsetConfig<T>): Promise<T> {
		return this.request<T>({ ...config, method: 'DELETE' })
	}
	patch<T>(config: HyRequsetConfig<T>): Promise<T> {
		return this.request<T>({ ...config, method: 'PATCH' })
	}
	put<T>(config: HyRequsetConfig<T>): Promise<T> {
		return this.request<T>({ ...config, method: 'PUT' })
	}
}

export default HyRequset
