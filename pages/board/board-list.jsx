import React from 'react'
import Meta from '@comp/common/Meta'
import BoardListContainer from '@comp/container/board/BoardListContainer'

export default function BoardList() {
	return (
		<>
			<Meta title="게시판 목록 | Silk Road" desc="게시판 목록입니다."></Meta>
			<BoardListContainer />
		</>
	)
}
