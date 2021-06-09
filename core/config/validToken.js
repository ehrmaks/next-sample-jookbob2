import jwtDecode from 'jwt-decode'

export function validateTimeAccessToken(accessToken) {
	if (!accessToken) {
		credentialExpiration()
		window.setAlert.show({ title: 'Token error', msg: 'There are no tokens.' })
		window.router.push('/user/user-login')
		return false
	}

	// jwt를 decode해서 payload를 추출한다.
	const decodePayload = jwtDecode(accessToken, {
		payload: true,
	})
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
		window.setAlert.show({ title: 'Token invalid', msg: 'Your credentials have expired. Please log in.' })
		window.router.push('/user/user-login')
		return false
	}
}

// 인증정보 만료 됐을 경우 실행되는 함수
function credentialExpiration() {
	// 쿠키 / 로컬스토리지 / user정보 모두 지움
	window.userInfo.remove()
	window.router.push('/user/user-login')
}
