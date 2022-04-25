<!-- <template>
	<div class="login-account">
		<el-form
			ref="loginAccountFormRef"
			:model="loginAccountForm"
			:rules="rules"
			class="login-account-form"
		>
			<el-form-item prop="username" class="elItem textItem">
				<span class="show-pwd svg-container">
					<img :src="require('@/assets/images/user.svg')" />
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
					<img :src="require('@/assets/images/baohu.svg')" />
				</span>
				<el-input
					v-model="loginAccountForm.password"
					auto-complete="off"
					placeholder="密码"
					@keyup.enter="loginAction"
					show-password
					style="border: none !important"
				/>
			</el-form-item>
			<el-form-item prop="code" class="codeItem">
				<div class="input-box">
					<span class="show-pwd svg-container">
						<img :src="require('@/assets/images/yanzheng.svg')" />
					</span>
					<el-input
						v-model="loginAccountForm.code"
						auto-complete="off"
						placeholder="验证码"
						@keyup.enter="loginAction"
						style="border: none !important"
					>
					</el-input>
				</div>
				<img :src="codeUrl" @click="getCode" class="login-code-img" />
			</el-form-item>
		</el-form>
		<div class="login-bottom">
			<div class="login-contrl">
				<el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
				<el-link type="primary">忘记密码</el-link>
			</div>
			<div class="login-btn">
				<el-button @click="loginAction" type="primary" size="large">立即登录</el-button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'
import { login } from '@/api/login/login'

import { rules } from '../config/account-config'
export default defineComponent({
	setup() {
		const store = useStore()
		const isKeepPassword = ref<boolean>(false) //记住密码
		const loginAccountFormRef = ref<InstanceType<typeof ElForm>>()
		const loginAccountForm = reactive({
			username: '',
			password: '',
			code: '',
			rememberMe: false,
			uuid: ''
		})
		const getCode = () => {
			console.log('getCode')
			// store.dispatch('login/getCodeAction')
			login({}).then(res => {
				console.log(res)
			})
		}
		const loginAction = () => {
			loginAccountFormRef.value?.validate(valid => {
				if (valid) {
					console.log('账号登录')
					// 2.进行登录验证
					store.dispatch('login/accountLoginAction', { ...loginAccountForm })
				}
			})
		}
		return {
			isKeepPassword,
			loginAccountFormRef,
			loginAccountForm,
			rules,
			loginAction,
			getCode
		}
	}
})
</script>

<style lang="scss" scoped>
.login-account {
	.login-account-form {
		::v-deep .elItem {
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
		::v-deep .textItem {
			border: 1px solid #dcdfe6;
		}
		//验证码的样式
		::v-deep .codeItem {
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
</style> -->
