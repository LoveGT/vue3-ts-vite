import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HYRequestInterceptor<T = AxiosResponse> {
	requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
	requestInterceptorCatch?: (error: any) => any
	responseInterceptor?: (response: T) => T
	responseInterceptorCatch?: (error: any) => any
}
export interface HyRequsetConfig<T = AxiosResponse> extends AxiosRequestConfig {
	interceptors?: HYRequestInterceptor<T>
	showLoading?: boolean
}
