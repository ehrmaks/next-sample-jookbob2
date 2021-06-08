import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Button, Card } from 'semantic-ui-react'
import BoardModal from '@comp/children/board/BoardModal'
import { useTranslation } from 'react-i18next'
import { GET_BOARD_DETAIL } from '@store/api/create/boardCreate'
import { useBoardContext } from '@store/api/providers/BoardApiProvider'
import Loading from '@/components/common/Loading'
import Error from '@/components/common/Error'

export default function BoardDetailContainer() {
	const { t } = useTranslation()
	const router = useRouter()
	const [open, setOpen] = useState(false)
	const { state, dispatch } = useBoardContext()
	const { data: boardDetail, loading, error } = state.boardDetail

	useEffect(() => {
		if (router.query.id) {
			GET_BOARD_DETAIL(dispatch, router.query.id)
		}
	}, [router.query.id])

	if (loading) return <Loading />
	if (error) return <Error />
	if (!boardDetail) return <div>데이터가 없다.</div>

	function openModal() {
		setOpen(true)
	}

	function goList() {
		router.push({
			pathname: `/board/board-list`,
		})
	}

	return (
		<div>
			{Object.keys(boardDetail.movie).length > 0 && (
				<div>
					<Card
						image={boardDetail.movie.medium_cover_image}
						header={boardDetail.movie.title}
						meta={boardDetail.movie.title}
						description={boardDetail.movie.description_intro.slice(0, 100) + '...'}
						onClick={() => openModal()}
					/>
					<BoardModal open={open} setOpen={setOpen} movie={boardDetail.movie}></BoardModal>
					<Button onClick={goList}>{t('button_golist')}</Button>
				</div>
			)}
		</div>
	)
}
