import React from 'react'
import Meta from '@comp/common/Meta'
import BoardDetailContainer from '@container/board/BoardDetailContainer'

export default function BoardDetail() {
	return (
		<>
			<Meta title="게시판 상세 | Silk Road" desc="게시판 상세 화면입니다."></Meta>
			<BoardDetailContainer />
		</>
	)
}
