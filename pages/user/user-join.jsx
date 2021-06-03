import React from 'react'
import Meta from '@comp/common/Meta'
import UserJoinContainer from '@comp/container/user/UserJoinContainer'

export default function MemberJoin() {
	return (
		<>
			<Meta title="회원가입 | Silk Road" desc="회원가입존 입니다."></Meta>
			<UserJoinContainer />
		</>
	)
}
