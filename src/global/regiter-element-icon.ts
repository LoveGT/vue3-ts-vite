import {
	Edit,
	Search,
	AddLocation,
	Delete,
	Avatar,
	ChatDotRound,
	Promotion,
	Notification,
	ElementPlus,
	ArrowDown,
	DocumentAdd,
	Refresh,
	Close
} from '@element-plus/icons-vue'
import type { App } from 'vue'
const icons = [
	Edit,
	Search,
	Delete,
	AddLocation,
	Avatar,
	ChatDotRound,
	Promotion,
	Notification,
	ElementPlus,
	ArrowDown,
	DocumentAdd,
	Refresh,
	Close
]

export default function (app: App): void {
	for (const icon of icons) {
		app.component(icon.name, icon)
	}
}
