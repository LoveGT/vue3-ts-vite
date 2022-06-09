import { createApp } from 'vue'
import Cookies from 'js-cookie' //ts中引入报错 需要安装 npm install --save @types/js-cookie

import { globalRegister } from './global'
import ElementPlus from 'element-plus'
// ElementPlus国际化
import zhCn from 'element-plus/lib/locale/lang/zh-cn' // 中文语言
import zhEn from 'element-plus/lib/locale/lang/en'
// 自定义国际化
import i18n from '@/lang/index'
import router from './router'
import { setupStore } from '@/store' //pinia注册

import directive from './directive' //注册自定义指令

import './router/guards/permission.ts' //路由守卫导航

import App from './App.vue'

// 引入tailwindcss
import '@/assets/styles/tailwindcss.css'
// 初始化样式
import 'normalize.css'
import '@/assets/styles/index.scss' // global css

//svg图标  vite中使用svg图标插件
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon/index.vue'

//引入iconfont样式
import '@/assets/iconfont/iconfont.css'

const app = createApp(App)

// 注册element-plus-icon/其他
app.use(globalRegister)
app.use(router)
app.use(setupStore)
app.use(i18n)
app.component('svg-icon', SvgIcon)
directive(app)

// 使用element-plus 并且设置全局的大小/国际化
app.use(ElementPlus, {
	locale: Cookies.get('lang') === 'zh-cn' ? zhCn : zhEn,
	// 支持 large、default、small
	size: Cookies.get('size') || 'default'
})
// app.use(ElementPlus)

app.mount('#app')
