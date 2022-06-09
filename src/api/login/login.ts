import hyRequest from '@/service'
import { IAccountLogin, ILoginResult, IGetCodeResult } from './types'
import { IDataType } from '../types'

enum loginApi {
	AccountLoignUrl = '/auth/oauth/token',
	CodeUrl = '/code',
	RefreshTokenUrl = '/auth/oauth/token',
	GetUserInfoUrl = '/system/user/getInfo',
	LogoutUrl = '/auth/token/logout'
}

const client_id = 'web'
const client_secret = 'e0bf307b-194b-44dd-8660-bc09663c5fc3'
const scope = 'server'
const grant_type = 'password'

// 账号登录
export function accountLoginRequest(account: IAccountLogin) {
	return hyRequest.post<ILoginResult>({
		url: loginApi.AccountLoignUrl,
		params: account
	})
}

// 获取验证码
export function getCodeImgRequest() {
	return hyRequest.get<IGetCodeResult>({
		url: loginApi.CodeUrl
	})
}

// 刷新方法
export function refreshTokenRequest(refresh_token: string) {
	const grant_type = 'refresh_token'
	return hyRequest.post<IDataType>({
		url: loginApi.RefreshTokenUrl,
		params: { client_id, client_secret, grant_type, scope, refresh_token }
	})
}
// 获取用户详细信息
export function getUserInfoRequest() {
	return hyRequest.get<any>({
		url: loginApi.GetUserInfoUrl
	})
}
// 退出方法
export function logoutRequest() {
	return hyRequest.delete<IDataType>({
		url: loginApi.LogoutUrl
	})
}
