import { LoadingStateContext } from '@/core/store/create'
import React, { useContext } from 'react'

export default function UserJoinContainer() {
	const { loadState } = useContext(LoadingStateContext)
	return <>{!loadState.loading && <h1>회원 가입 컨테이너</h1>}</>
}
