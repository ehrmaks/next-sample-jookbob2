import Loading from '@comp/common/Loading'
import Router from '@comp/common/Router'
import AlertModal from '@comp/common/AlertModal'
import ConfirmModal from '@comp/common/ConfirmModal'
import { useContext, useEffect } from 'react'
import { AlertStateContext, LoadingStateContext, UserStateContext } from '@/core/store/create'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import { userInitialState } from '@/core/store/initialState'
import jwtDecode from 'jwt-decode'

// 권한이 필요한 asPath List
const authPathList = ['/member/memberlist']

export default function AppContainer({ Component }) {
	const router = useRouter()
	const { useAlert } = useContext(AlertStateContext)
	const { userDispatch } = useContext(UserStateContext)
	const { loadState } = useContext(LoadingStateContext)
	const [cookies, , removeCookie] = useCookies(['userInfo'])

	/*
	 * 인증을 필요로 하는 Path 토큰 검증
	 */
	useEffect(() => {
		if (authPathList.includes(router.asPath)) validateAccessToken()
	}, [router.asPath])

	/*
	 * 새로고침 or 첫화면 로딩 시 토큰 값 바인딩
	 */
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

	/*
	 * 토큰 검증 하는 함수
	 * @return boolean
	 */
	function validateAccessToken() {
		let accessToken

		if (cookies.userInfo) accessToken = cookies.userInfo.accessToken

		if (!accessToken) {
			useAlert({ msg: '권한이 없습니다. 로그인해 주세요.' }).then(() => {
				// 로그인 페이지로 이동
				router.push('/user/user-login')
			})
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

	/*
	 * 인증정보 만료 됐을 경우 실행되는 함수
	 */
	function credentialExpiration() {
		// 쿠키를 지움
		removeCookie('userInfo', {
			domain: location.href.includes('localhost') ? 'localhost' : process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
			path: '/',
		})

		// user state 초기화
		userDispatch({
			type: 'SET_INIT_USER',
			payload: userInitialState,
		})

		useAlert({ msg: '권한이 만료 되었습니다. 로그인해 주세요.' }).then(() => {
			// 로그인 페이지로 이동
			router.push('/user/user-login')
		})
	}

	return (
		<div className={loadState.loading ? 'container loading' : 'container'}>
			<Router />
			<Loading />
			<AlertModal />
			<ConfirmModal />
			<Component.Page {...Component.pageProps} />
		</div>
	)
}
