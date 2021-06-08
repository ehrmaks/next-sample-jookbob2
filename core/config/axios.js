import axios from 'axios'

function setInterceptors(instance) {
	instance.interceptors.request.use(
		config => {
			return config
		},
		error => {
			console.error('Request error : ', { error })

			window.setAlert.show({ title: 'Request error', msg: error.message })

			return Promise.reject(error.response)
		},
	)
	instance.interceptors.response.use(
		response => {
			return response
		},
		error => {
			console.error('Response error : ', { error })

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
				window.setAlert.show({ title: 'Response undefined', msg: error.message })
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

export const defaultClient = authCreate(process.env.NEXT_PUBLIC_API_URL)
export const authClient = authCreate(process.env.NEXT_PUBLIC_LOCAL_API_URL)
export const noneAuthClient = noneAuthCreate(process.env.NEXT_PUBLIC_LOCAL_API_URL)
