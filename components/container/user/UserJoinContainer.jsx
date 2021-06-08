import { UserStateContext } from '@/core/store/common/create'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'

export default function UserJoinContainer() {
	const { userState } = useContext(UserStateContext)
	const router = useRouter()

	useEffect(() => {
		console.log('userState ==> ', userState)
		if (userState.accessToken) {
			router.push('/')
		}
	}, [userState.accessToken])

	return (
		<>
			<h1>회원 가입 컨테이너</h1>
		</>
	)
}
