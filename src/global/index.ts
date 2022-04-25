import { App } from 'vue'
import registerElementIcons from './regiter-element-icon'

export function globalRegister(app: App): void {
  app.use(registerElementIcons)
}
