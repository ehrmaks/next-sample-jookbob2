import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '@styles/board/board-list.module.scss'
import { Button, Table } from 'semantic-ui-react'
import { useTranslation } from 'react-i18next'
import { useBoardContext } from '@store/api/providers/BoardApiProvider'
import { GET_BOARD_LIST } from '@store/api/create/boardCreate'
import Loading from '@/components/common/Loading'
import Error from '@/components/common/Error'

export default function BoardListContainer() {
	const { t } = useTranslation()
	const router = useRouter()
	const { state, dispatch } = useBoardContext()
	const { data: boardList, loading, error } = state.boardList

	useEffect(() => {
		fetchData()
	}, [])

	function fetchData() {
		GET_BOARD_LIST(dispatch)
	}

	if (loading) return <Loading />
	if (error) return <Error />
	if (!boardList) return <Button onClick={fetchData}>불러오기</Button>

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
			<div className={styles.board_list_wrap}>
				<Table celled>
					<Table.Header>
						<Table.Row textAlign="center">
							<Table.HeaderCell>{t('table_id')}</Table.HeaderCell>
							<Table.HeaderCell>{t('table_title')}</Table.HeaderCell>
							<Table.HeaderCell>{t('table_lang')}</Table.HeaderCell>
							<Table.HeaderCell>{t('table_createdt')}</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						{boardList.movies.map(board => (
							<Table.Row key={board.id} onClick={() => goDetail(board.id)}>
								<Table.Cell>{board.id}</Table.Cell>
								<Table.Cell>{board.title}</Table.Cell>
								<Table.Cell>{board.language}</Table.Cell>
								<Table.Cell>{board.year}</Table.Cell>
							</Table.Row>
						))}
						{boardList.movies.length < 1 && (
							<Table.Row>
								<Table.Cell colSpan="4" textAlign="center">
									{t('table_nodata')}
								</Table.Cell>
							</Table.Row>
						)}
					</Table.Body>
				</Table>
			</div>
		</>
	)
}
