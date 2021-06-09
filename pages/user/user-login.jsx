import React from 'react'
import Meta from '@comp/common/Meta'
import UserLoginContainer from '@container/user/UserLoginContainer'

export default function UserLogin() {
	return (
		<>
			<Meta title="로그인 | Silk Road" desc="로그인 페이지 입니다."></Meta>
			<UserLoginContainer />
		</>
	)
}
