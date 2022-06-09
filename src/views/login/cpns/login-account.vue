<template>
	<div class="login-account">
		<el-form
			ref="loginAccountFormRef"
			:model="loginAccountForm"
			:rules="rules"
			class="login-account-form"
		>
			<el-form-item prop="username" class="elItem textItem">
				<span class="show-pwd svg-container">
					<img :src="getAssetsImages('user.svg')" />
				</span>
				<el-input
					v-model="loginAccountForm.username"
					type="text"
					auto-complete="off"
					placeholder="账号"
					style="border: none !important"
				>
				</el-input>
			</el-form-item>
			<el-form-item prop="password" class="elItem textItem">
				<span class="show-pwd svg-container">
					<img :src="getAssetsImages('baohu.svg')" />
				</span>
				<el-input
					v-model="loginAccountForm.password"
					auto-complete="off"
					placeholder="密码"
					style="border: none !important"
					show-password
					@keyup.enter="loginAction"
				/>
			</el-form-item>
			<el-form-item prop="code" class="codeItem">
				<div class="input-box">
					<span class="show-pwd svg-container">
						<img :src="getAssetsImages('yanzheng.svg')" />
					</span>
					<el-input
						v-model="loginAccountForm.code"
						auto-complete="off"
						placeholder="验证码"
						style="border: none !important"
						@keyup.enter="loginAction"
					>
					</el-input>
				</div>
				<img :src="codeUrl" class="login-code-img" @click="getCode" />
			</el-form-item>
		</el-form>
		<div class="login-bottom">
			<div class="login-contrl">
				<el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
				<el-link type="primary">忘记密码</el-link>
			</div>
			<div class="login-btn">
				<el-button type="primary" size="large" @click="loginAction"
					>立即登录</el-button
				>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import Cookies from 'js-cookie'
import { useLoginStore } from '@/store/modules/login/login'

import { getCodeImgRequest } from '@/api/login/login'

import type { ElForm } from 'element-plus'

import { rules } from '../config/account-config'

const client_id = 'web'
const client_secret = 'e0bf307b-194b-44dd-8660-bc09663c5fc3'
const scope = 'server'
const grant_type = 'password'
import { useRouter } from 'vue-router'
export default defineComponent({
	setup() {
		const loginStore = useLoginStore() //获取login-pinia
		const router = useRouter() //获取路由对象

		// vite获取静态资源的方式
		const getAssetsImages = (name: string) => {
			return new URL(`/src/assets/images/${name}`, import.meta.url).href
		}
		onMounted(() => {
			getCode()
		})
		const getCode = () => {
			getCodeImgRequest().then((res) => {
				codeUrl.value = 'data:image/gif;base64,' + res.img
				loginAccountForm.uuid = res.uuid
				// loginAccountForm.code =  res
			})
		}

		const codeUrl = ref('')
		const isKeepPassword = ref<boolean>(false) //记住密码
		const loginAccountFormRef = ref<InstanceType<typeof ElForm>>()
		const redirect = ref(undefined)

		const loginAccountForm = reactive({
			username: '',
			password: '',
			code: '',
			uuid: ''
		})
		const loginAction = () => {
			loginAccountFormRef.value?.validate((valid) => {
				if (valid) {
					if (isKeepPassword.value) {
						Cookies.set('username', loginAccountForm.username, { expires: 30 })
						Cookies.set('password', loginAccountForm.password, { expires: 30 })
						//保存的天数 7 天 七天后过期
						// vm.setCookie('rememberMe', vm.loginForm.rememberMe, 24 * 60 * 60 * 1000 * 7)
					} else {
						Cookies.remove('username')
						Cookies.remove('password')
						Cookies.remove('rememberMe')
					}
					const loginParams = {
						...loginAccountForm,
						client_id,
						client_secret,
						scope,
						grant_type
					}
					// 2.进行登录验证
					loginStore
						.accountLoginAction(loginParams)
						.then(() => {
							router.push({ path: redirect.value || '/' })
							// router.push({ path: '/index' })
						})
						.catch((err) => {
							console.log(err, 'err')
							getCode()
						})
				}
			})
		}
		return {
			codeUrl,
			isKeepPassword,
			loginAccountFormRef,
			loginAccountForm,
			rules,
			loginAction,
			getCode,
			getAssetsImages
		}
	}
})
</script>

<style lang="scss" scoped>
.login-account {
	.login-account-form {
		::v-deep(.elItem) {
			height: 40px;
			margin-bottom: 21px;
			border-radius: 5px;
			.el-form-item__content {
				display: flex;
				justify-content: center;
				align-items: center;
				.svg-container {
					width: 30px;
					display: flex;
					justify-content: center;
					align-items: center;
					img {
						width: 16px;
						height: 16px;
					}
				}
				.el-input {
					flex: 1;
					.el-input__inner {
						box-shadow: none;
						border: none !important;
						padding: 0;
						height: 40px;
						text-align: left;
					}
				}
			}
		}
		::v-deep(.textItem) {
			border: 1px solid #dcdfe6;
		}
		//验证码的样式
		::v-deep(.codeItem) {
			height: 40px;
			margin-bottom: 21px;
			border-radius: 5px;
			display: flex;
			justify-content: space-between;
			.svg-container {
				width: 35px;
				display: flex;
				justify-content: center;
				align-items: center;
				img {
					width: 16px;
					height: 16px;
				}
			}
			.input-box {
				height: 40px;
				flex: 1;
				display: flex;
				border: 1px solid #dcdfe6;
				.el-input__inner {
					box-shadow: none;
					border: none !important;
					padding: 0;
					height: 40px;
					text-align: left;
				}
				.el-input__icon {
					//密码显示隐藏icon大小
					font-size: 24px;
				}
			}
			.login-code-img {
				margin-left: 30px;
				height: 38px;
				width: 100px;
			}
		}
	}
	.login-bottom {
		.login-contrl {
			display: flex;
			justify-content: space-between;
		}
		.login-btn {
			margin-top: 5px;
			.el-button {
				width: 100%;
			}
		}
	}
}
</style>
