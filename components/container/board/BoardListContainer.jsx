import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@styles/board/board-list.module.scss'
import { Table } from 'semantic-ui-react'
import { boardList as boardListApi } from '@api/board/boardApi'
import { LoadingStateContext } from '@/core/store/create'

export default function BoardListContainer() {
	const { loadState } = useContext(LoadingStateContext)
	const [boardList, setBoardList] = useState([])
	const router = useRouter()

	useEffect(() => {
		// list api 호출
		boardListApi()
			.then(res => {
				setBoardList(res.data.data.movies)
			})
			.catch(err => {
				console.log(err)
			})
		// clean up
		return () => {
			setBoardList([])
		}
	}, [])

	function goDetail(id) {
		router.push({
			pathname: '/board/board-detail',
			query: {
				id,
			},
		})
	}

	return (
		<>
			{!loadState.loading && (
				<div className={styles.board_list_wrap}>
					<Table celled>
						<Table.Header>
							<Table.Row textAlign="center">
								<Table.HeaderCell>아이디</Table.HeaderCell>
								<Table.HeaderCell>제목</Table.HeaderCell>
								<Table.HeaderCell>언어</Table.HeaderCell>
								<Table.HeaderCell>출시연도</Table.HeaderCell>
							</Table.Row>
						</Table.Header>

						<Table.Body>
							{boardList.map(board => (
								<Table.Row key={board.id} onClick={() => goDetail(board.id)}>
									<Table.Cell>{board.id}</Table.Cell>
									<Table.Cell>{board.title}</Table.Cell>
									<Table.Cell>{board.language}</Table.Cell>
									<Table.Cell>{board.year}</Table.Cell>
								</Table.Row>
							))}
							{boardList.length < 1 && (
								<Table.Row>
									<Table.Cell colSpan="4" textAlign="center">
										데이터가 없습니다.
									</Table.Cell>
								</Table.Row>
							)}
						</Table.Body>
					</Table>
				</div>
			)}
		</>
	)
}
