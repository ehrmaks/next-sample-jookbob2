import axios from 'axios'

function setInterceptors(instance) {
	instance.interceptors.request.use(
		config => {
			// 로딩바 실행
			window.loading.onStart()
			return config
		},
		error => {
			console.error('request error : ', { error })
			// 로딩바 종료
			if (error.config) window.loading.onEnd()

			window.setAlert.show({ title: 'Request error', msg: error.message })

			return Promise.reject(error.response)
		},
	)
	instance.interceptors.response.use(
		response => {
			// 로딩바 종료
			if (response) window.loading.onEnd()

			return response
		},
		error => {
			console.error('response error : ', { error })
			// 로딩바 종료
			window.loading.onEnd()

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
