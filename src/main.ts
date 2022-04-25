import { createApp } from "vue";
import { createPinia } from "pinia";

import Cookies from "js-cookie"; //ts中引入报错 需要安装 npm install --save @types/js-cookie

import { globalRegister } from "./global";
import ElementPlus from "element-plus";
import locale from "element-plus/lib/locale/lang/zh-cn"; // 中文语言
import router from "./router";

import App from "./App.vue";
// 初始化样式
import 'normalize.css'

const app = createApp(App);

// 注册element-plus-icon/其他
app.use(globalRegister);
app.use(router);
app.use(createPinia());

// 使用element-plus 并且设置全局的大小
app.use(ElementPlus, {
  locale: locale,
  // 支持 large、default、small
  size: Cookies.get("size") || "default",
});
// app.use(ElementPlus)

app.mount("#app");
