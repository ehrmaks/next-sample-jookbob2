import axios from 'axios'

function setInterceptors(instance) {
	instance.interceptors.request.use(
		config => {
			// 로딩바 실행
			window.loading.onStart()
			return config
		},
		error => {
			// 로딩바 종료
			if (error.config) window.loading.onEnd()

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
			// 로딩바 종료
			window.loading.onEnd()

			return Promise.reject(error.response)
		},
	)
	return instance
}

function create(url, options) {
	const instance = axios.create(Object.assign({ baseURL: url }, options))
	setInterceptors(instance)
	return instance
}

function noneAuthCreate(url, options) {
	const instance = axios.create(Object.assign({ baseURL: url }, options))
	return instance
}

export const defaultClient = create(process.env.NEXT_PUBLIC_API_URL)
export const localClient = noneAuthCreate('http://localhost:8080')
