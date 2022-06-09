export interface IAccountLogin {
	username: string
	password: string
	code: string
	uuid: string
	client_id: string
	client_secret: string
	grant_type: string
	scope: string
}
export interface ILoginResult {
	access_token: string
	expires_in: number
	nickname: string
	refresh_token: string
	scope: string
	token_type: string
	user_id: number
	username: string
}

export interface IGetCodeResult {
	code: number
	img: string
	msg: string
	uuid: string
}
