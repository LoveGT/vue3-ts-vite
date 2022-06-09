import { defineConfig, UserConfigExport, loadEnv } from 'vite'
// import eslintPlugin from 'vite-plugin-eslint' // 引入vite-plugin-vue
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

//@ts-ignore
import { resolve } from 'path'
const pathResolve = (dir: string) => resolve(__dirname, dir)
export default ({ mode }) =>
	defineConfig({
		base: './',
		build: {
			outDir: 'dist'
			// terserOptions: {
			// 	compress: {
			// 		keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
			// 		drop_console: true, // 生产环境去除 console
			// 		drop_debugger: true // 生产环境去除 debugger
			// 	}
			// }
		},
		server: {
			host: '0.0.0.0',
			// 开发服务器配置
			// port: 3000, // 开发服务器端口
			proxy: {
				[loadEnv(mode, process.cwd()).VITE_APP_BASE_API]: {
					// target: `http://192.168.0.99:10122`, // 腾讯云服务器
					target: loadEnv(mode, process.cwd()).VITE_APP_WEB_URL, // 动态加载服务器地址
					changeOrigin: true,
					rewrite: (path) => {
						const apiString = loadEnv(mode, process.cwd()).VITE_APP_BASE_API
						const envApi = new RegExp(apiString, 'g')
						return path.replace(envApi, '')
					}
				}
			}
		},
		resolve: {
			alias: {
				'@': pathResolve('./src'),
				views: pathResolve('./src/views'),
				components: pathResolve('./src/components'),
				assets: pathResolve('./src/assets')
			},
			// https://cn.vitejs.dev/config/#resolve-extensions
			extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
		},
		plugins: [
			vue(),
			AutoImport({
				resolvers: [ElementPlusResolver()]
			}),
			Components({
				resolvers: [ElementPlusResolver()]
			}),
			createSvgIconsPlugin({
				// Specify the icon folder to be cached
				iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/svg')],
				// Specify symbolId format
				symbolId: 'icon-[dir]-[name]'
			}),
			viteMockServe({
				mockPath: '/src/mock',
				localEnabled: true
			})
		],
		css: {
			preprocessorOptions: {
				scss: {
					additionalData2: `@use "@/assets/styles/element-ui.scss" as *;`,
					additionalData: '@import "@/assets/styles/main.scss";'
				}
			}
		}
	})
