import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { HyRequsetConfig, HYRequestInterceptor } from './types'

import { ElLoading, ElMessageBox, ElMessage } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

import { useLoginStore } from '@/store/modules/login/login'
import errorCode from '@/utils/errorCode'

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
				if (this.showLoading) {
					this.loading = ElLoading.service({
						lock: true,
						text: 'Loading',
						background: 'rgba(0, 0, 0, 0.7)'
					})
				}

				return config
			},
			(error) => {
				return error
			}
		)

		this.instance.interceptors.response.use(
			(response) => {
				const loginStore = useLoginStore() //获取login-pinia
				// 未设置状态码则默认成功状态
				const code = response.data.code || 200
				// 获取错误信息
				const msg = errorCode[code] || response.data.msg || errorCode['default']

				this.loading?.close()

				const data = response.data
				// if (data?.returnCode === '-1001') {
				// 	console.log('请求失败，错误信息')
				// }
				if (data.code === 401) {
					ElMessageBox.confirm(
						'登录状态已过期，你可以继续留在该页面，或者重新登录',
						'系统提示',
						{
							confirmButtonText: '重新登录',
							cancelButtonText: '取消',
							type: 'warning'
						}
					).then(() => {
						loginStore.logoutResult(() => {
							location.href = '/index'
						})
					})
					return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
				} else if (code === 500) {
					ElMessage({
						message: msg,
						type: 'error'
					})
					return Promise.reject(new Error(msg))
				} else {
					// return data
					return Promise.resolve(data)
				}
			},
			(error) => {
				this.loading?.close()
				let { message } = error
				if (message === 'Network Error') {
					message = '后端接口连接异常'
				} else if (message.includes('timeout')) {
					message = '系统接口请求超时'
				} else if (message.includes('Request failed with status code')) {
					message = '系统接口' + message.substr(message.length - 3) + '异常'
				}
				ElMessage({
					message: message,
					type: 'error',
					duration: 5 * 1000
				})
				return Promise.reject(error)
				// if (error.response.status === 404) {
				// 	console.log('404错误')
				// }
				// return error
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
