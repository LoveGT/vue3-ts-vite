import { App } from 'vue'
import registerElementIcons from './regiter-element-icon'
import registerLocalIcons from './regiter-local-svgIcon'

export function globalRegister(app: App): void {
	app.use(registerElementIcons)
	app.use(registerLocalIcons)
}
