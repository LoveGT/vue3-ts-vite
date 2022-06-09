/**
 * 判断url是否是http或https
 * @param {string} path
 * @returns {Boolean}
 */
export function isHttp(url) {
	return url.indexOf('http://') !== -1 || url.indexOf('https://') !== -1
}

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path: string): boolean {
	return /^(https?:|mailto:|tel:)/.test(path)
}
