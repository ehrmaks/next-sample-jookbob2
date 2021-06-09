import axios from 'axios'
import { getSession } from './session'
import { validateTimeAccessToken } from './validToken'

function setInterceptors(instance) {
	instance.interceptors.request.use(
		config => {
			const userInfo = getSession('userInfo')
			if (!userInfo) {
				window.setAlert.show({ title: 'Request error', msg: 'User information does not exist' })
				window.router.push('/user/user-login')

				return false
			}

			if (validateTimeAccessToken(userInfo.accessToken)) {
				config.headers['Authorization'] = userInfo.accessToken
				config.headers['Content-Type'] = 'application/json'
			}

			return config
		},
		error => {
			window.setAlert.show({ title: 'Request error', msg: error.message })

			return Promise.reject(error.response)
		},
	)
	instance.interceptors.response.use(
		response => {
			return response
		},
		error => {
			if (error.response) {
				window.setAlert.show({
					title: 'Response server error',
					msg: `status => ${error.response.status} : ${error.response.data.msg}`,
				})
				if ((error.response.status === 401 || error.response.status === 403) && error.response.data.msg) {
					// 로그아웃 처리 및 로그인 페이지로 이동
					window.router.push('/')
				}
			} else {
				window.setAlert.show({ title: 'Response error', msg: error.message })
			}

			return Promise.reject(error.response)
		},
	)
	return instance
}

function authCreate(url, options) {
	const instance = axios.create(Object.assign({ baseURL: url }, options))
	setInterceptors(instance)
	return instance
}

function noneAuthCreate(url, options) {
	const instance = axios.create(Object.assign({ baseURL: url }, options))
	return instance
}

export const defaultClient = noneAuthCreate(process.env.NEXT_PUBLIC_API_URL)
export const authClient = authCreate(process.env.NEXT_PUBLIC_LOCAL_API_URL)
export const noneAuthClient = noneAuthCreate(process.env.NEXT_PUBLIC_LOCAL_API_URL)
