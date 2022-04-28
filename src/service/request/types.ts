import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HYRequestInterceptor {
	requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
	requestInterceptorCatch?: (error: any) => any
	responseInterceptor?: (response: AxiosResponse) => AxiosResponse
	responseInterceptorCatch?: (error: any) => any
}
export interface HyRequsetConfig extends AxiosRequestConfig {
	interceptors?: HYRequestInterceptor
}
