// 이 함수는 파라미터로 액션의 타입 (예: GET_USER) 과 Promise 를 만들어주는 함수를 받아옵니다.
export function createAsyncDispatcher(type, promiseFn) {
	console.log('2 dispatcher')
	// 성공, 실패에 대한 액션 타입 문자열을 준비합니다.
	const SUCCESS = `${type}_SUCCESS`
	const ERROR = `${type}_ERROR`
	// 새로운 함수를 만듭니다.
	// ...rest 를 사용하여 나머지 파라미터를 rest 배열에 담습니다.
	async function actionHandler(dispatch, ...rest) {
		console.log('4')
		dispatch({ type }) // 요청 시작됨
		try {
			const data = await promiseFn(...rest) // rest 배열을 spread 로 넣어줍니다.
			dispatch({
				type: SUCCESS,
				data,
			}) // 성공함

			// then을 사용하기 위한 객체 반환
			return {
				success: true,
				data,
			}
		} catch (e) {
			dispatch({
				type: ERROR,
				error: e,
			}) // 실패함

			// then을 사용하기 위한 객체 반환
			return {
				success: false,
				data: e,
			}
		}
	}

	return actionHandler // 만든 함수를 반환합니다.
}
