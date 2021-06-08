import { userConstants } from '../costants/user'
import { userLoginHandler } from '../create/userCreate'

// 위에서 만든 객체 / 유틸 함수들을 사용하여 리듀서 작성
export function userReducer(state, action) {
	switch (action.type) {
		case userConstants.POST_USER_LOGIN:
		case userConstants.POST_USER_LOGIN_SUCCESS:
		case userConstants.POST_USER_LOGIN_ERROR:
			return userLoginHandler(state, action)
		default:
			throw new Error(`Unhanded action type: ${action.type}`)
	}
}
