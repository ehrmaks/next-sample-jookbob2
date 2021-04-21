import jwtDecode from 'jwt-decode'
import { useRouter } from 'next/router'
import React, { useEffect, useReducer } from 'react'
import { useCookies } from 'react-cookie'
import { AlertStateContext, ConfirmStateContext, LoadingStateContext, UserStateContext } from './create'
import { alertInitialState, confirmInitialState, loadingInitialState, userInitialState } from './initialState'
import { alertReducer, confirmReducer, loadingReducer, userReducer } from './reducer'

// 권한이 필요한 asPath List
const authPathList = ['/member/memberlist']

export default function Store({ children }) {
	const [alertState, alertDispatch] = useReducer(alertReducer, alertInitialState)
	const [confirmState, confirmDispatch] = useReducer(confirmReducer, confirmInitialState)
	const [loadState, loadDispatch] = useReducer(loadingReducer, loadingInitialState)
	const [userState, userDispatch] = useReducer(userReducer, userInitialState)

	const [cookies, , removeCookie] = useCookies(['userInfo'])
	const router = useRouter()

	useEffect(() => {
		if (authPathList.includes(router.asPath)) validateAccessToken()
	}, [router.asPath])

	useEffect(() => {
		// 로그인 상태라면 쿠키의 정보를 스토어에 저장
		if (cookies.userInfo) {
			// 최초에 토큰이 존재한다면 토큰 유효성 검사 후 유저 정보 저장
			if (validateAccessToken())
				userDispatch({
					type: 'ADD_USER',
					payload: cookies.userInfo,
				})
			else
				userDispatch({
					type: 'SET_INIT_USER',
					payload: userInitialState,
				})
		}
		// 로그인 정보가 쿠키에 없다면 유저 정보 초기화
		else
			userDispatch({
				type: 'SET_INIT_USER',
				payload: userInitialState,
			})
	}, [])

	function validateAccessToken() {
		let accessToken
		if (cookies.userInfo) accessToken = cookies.userInfo.accessToken

		if (!accessToken) {
			// 로그인 페이지로 이동
			router.push('/member/memberlogin')
			alert('권한이 없습니다. 로그인해 주세요.')
			return false
		}

		// jwt를 decode해서 payload를 추출한다.
		const decodePayload = jwtDecode(accessToken)
		// exp가 UNIX Time으로 나오기 때문에 변환을 해준다.
		const exp = new Date(decodePayload.exp * 1000).getTime()
		const now = new Date().getTime() // 테스트시 주석처리 하면 됨

		// 토큰세션 유지시간 테스트용 딜레이 타임
		// const delayTime = 3600000; // 딜레이 타임 (1000 = 1초)
		// const now = new Date().getTime() + (3600000 - delayTime);

		if (now < exp) {
			return true
		} else {
			credentialExpiration()
			return false
		}
	}

	// 인증정보 만료 됐을 경우 실행되는 함수
	function credentialExpiration() {
		// 쿠키를 지움
		removeCookie('userInfo', {
			domain: location.href.includes('localhost') ? 'localhost' : process.env.NEXT_COOKIE_DOMAIN,
			path: '/',
		})

		// user state 초기화
		userDispatch({
			type: 'SET_INIT_USER',
			payload: userInitialState,
		})

		// 로그인 페이지로 이동
		router.push('/member/memberlogin')

		alert('권한이 만료 되었습니다. 로그인해 주세요.')
	}

	return (
		<AlertStateContext.Provider value={{ alertState, alertDispatch }}>
			<ConfirmStateContext.Provider value={{ confirmState, confirmDispatch }}>
				<LoadingStateContext.Provider value={{ loadState, loadDispatch }}>
					<UserStateContext.Provider value={{ userState, userDispatch }}>
						{children}
					</UserStateContext.Provider>
				</LoadingStateContext.Provider>
			</ConfirmStateContext.Provider>
		</AlertStateContext.Provider>
	)
}
