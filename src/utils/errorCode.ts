export interface errorCodeType {
	401: string
	403: string
	404: stirng
	default: string
}

const errorCode: errorCodeType = {
	401: '认证失败，无法访问系统资源',
	403: '当前操作没有权限',
	404: '访问资源不存在',
	default: '系统未知错误，请反馈给管理员'
}

export default errorCode
