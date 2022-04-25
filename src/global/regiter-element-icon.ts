import {
  Edit,
  Search,
  AddLocation,
  Delete,
  Avatar,
  ChatDotRound,
  Promotion
} from '@element-plus/icons-vue'
import type { App } from 'vue'

const icons = [Edit, Search, Delete, AddLocation, Avatar, ChatDotRound, Promotion]

export default function (app: App): void {
  for (const icon of icons) {
    app.component(icon.name, icon)
  }
}
