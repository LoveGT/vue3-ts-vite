import { defineStore } from 'pinia'
import { ITagsViewType } from './types'
export const useTagsViewStore = defineStore('tagsView', {
	state: (): ITagsViewType => {
		return {
			visitedViews: [],
			cachedViews: []
		}
	},
	actions: {
		addView(view) {
			this.addVisitedView(view)
			this.addCachedView(view)
		},
		addVisitedView(view) {
			if (this.visitedViews.some((v) => v.path === view.path)) return
			this.visitedViews.push(
				Object.assign({}, view, { title: view.meta.title || 'no-name' })
			)
		},
		addCachedView(view) {
			if (this.cachedViews.includes(view.name)) return
			if (!view.meta.noCache) {
				this.cachedViews.push(view.name)
			}
		},

		delView(view) {
			return new Promise((resolve) => {
				this.delVisitedView(view)
				this.delCachedView(view)
				resolve({
					visitedViews: [...this.visitedViews],
					cachedViews: [...this.cachedViews]
				})
			})
		},
		delVisitedView(view) {
			return new Promise((resolve, reject) => {
				for (const [i, v] of this.visitedViews.entries()) {
					if (v.path === view.path) {
						this.visitedViews.splice(i, 1)
						break
					}
				}
				resolve([...this.visitedViews])
			})
		},
		delCachedView(view) {
			return new Promise((resolve, reject) => {
				const index = this.cachedViews.indexOf(view.name)
				index > -1 && this.cachedViews.splice(index, 1)
				resolve([...this.cachedViews])
			})
		},

		delOthersViews(view) {
			return new Promise((resolve, reject) => {
				this.delOthersVisitedViews(view)
				this.delOthersCachedViews(view)
				resolve({
					visitedViews: [...this.visitedViews],
					cachedViews: [...this.cachedViews]
				})
			})
		},
		delOthersVisitedViews(view) {
			return new Promise((resolve, reject) => {
				this.visitedViews = this.visitedViews.filter((v) => {
					return v.meta.affix || v.path === view.path
				})
				resolve([...this.visitedViews])
			})
		},
		delOthersCachedViews(view) {
			return new Promise((resolve, reject) => {
				const index = this.cachedViews.indexOf(view.name)
				if (index > -1) {
					this.cachedViews = this.cachedViews.slice(index, index + 1)
				} else {
					this.cachedViews = []
				}
				resolve([...this.cachedViews])
			})
		},

		updateVisitedView(view) {
			for (let v of this.visitedViews) {
				if (v.path === view.path) {
					v = Object.assign(v, view)
					break
				}
			}
		},
		delRightTags(view) {
			return new Promise((resolve, reject) => {
				const index = this.visitedViews.findIndex((v) => v.path === view.path)
				if (index === -1) {
					return
				}
				this.visitedViews = this.visitedViews.filter((item, idx) => {
					if (idx <= index || (item.meta && item.meta.affix)) {
						return true
					}
					const i = this.cachedViews.indexOf(item.name)
					if (i > -1) {
						this.cachedViews.splice(i, 1)
					}
					return false
				})
				resolve([...this.visitedViews])
			})
		},

		dellAllViews(view) {
			return new Promise((resolve, reject) => {
				this.delAllVisitedViews(view)
				this.delAllCachedViews(view)
				resolve({
					visitedViews: [...this.visitedViews],
					cachedViews: [...this.cachedViews]
				})
			})
		},
		delAllVisitedViews(view) {
			return new Promise((resolve, reject) => {
				// keep affix tags
				const affixTags = this.visitedViews.filter((tag) => tag.meta.affix)
				this.visitedViews = affixTags
				resolve([...this.visitedViews])
			})
		},
		delAllCachedViews(view) {
			return new Promise((resolve, reject) => {
				this.cachedViews = []
				resolve([...this.cachedViews])
			})
		}
	}
})
