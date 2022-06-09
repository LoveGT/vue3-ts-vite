import { defineStore } from 'pinia'

import {
	accountLoginRequest,
	getUserInfoRequest,
	logoutRequest
} from '@/api/login/login'
import {
	getToken,
	setToken,
	removeToken,
	setRefreshToken,
	getRefreshToken,
	setExpiresIn
} from '@/utils/auth'
import { ILoginState } from './types'
import { IAccountLogin } from '@/api/login/types'

export const useLoginStore = defineStore('login', {
	state: (): ILoginState => {
		return {
			token: getToken(),
			refresh_token: getRefreshToken(),
			expires_in: '',
			userName: '',
			userId: '',
			nickName: '',
			avatar: '',
			roles: [],
			permissions: []
		}
	},
	actions: {
		// 登录请求
		accountLoginAction(payload: IAccountLogin) {
			return new Promise((resolve, reject) => {
				accountLoginRequest(payload)
					.then((accountLoginResult) => {
						setToken(accountLoginResult.access_token)
						this.token = accountLoginResult.access_token

						this.userName = accountLoginResult.username
						this.userId = accountLoginResult.user_id
						this.nickName = accountLoginResult.nickname

						setRefreshToken(accountLoginResult.refresh_token)
						this.refresh_token = accountLoginResult.refresh_token

						setExpiresIn(accountLoginResult.expires_in)
						this.expires_in = accountLoginResult.expires_in
						resolve(accountLoginResult)
					})
					.catch((error) => {
						reject(error)
					})
			})
		},
		// 获取用户的信息
		getUserInfoAction() {
			return new Promise((resolve, reject) => {
				getUserInfoRequest()
					.then((userInfoResult) => {
						// vite获取静态资源的方式
						const getAssetsImages = (name) => {
							return new URL(`/src/assets/profile/${name}`, import.meta.url)
								.href
						}
						const { user, permissions, roles } = userInfoResult
						this.avatar = getAssetsImages('User 01a.jpg')
						if (userInfoResult.roles && userInfoResult.roles.length > 0) {
							// 验证返回的roles是否是一个非空数组
							this.roles = roles
							this.permissions = permissions
						} else {
							this.roles = ['ROLE_DEFAULT']
						}
						resolve(userInfoResult)
					})
					.catch((err) => {
						reject(err)
					})
			})
		},
		// 退出系统
		logoutAction() {
			return new Promise((resolve, reject) => {
				logoutRequest()
					.then((logoutResult) => {
						console.log(logoutResult)
						removeToken()
						resolve(logoutResult)
					})
					.catch((error) => {
						console.log(error)
						reject(error)
					})
			})
		}
	}
})
