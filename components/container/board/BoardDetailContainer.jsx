import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Meta from '@comp/common/Meta'
import { Button, Card } from 'semantic-ui-react'
import { boardDetail as boardDetailApi } from '@api/board/boardApi'
import BoardModal from '@comp/child/board/BoardModal'
import { LoadingStateContext } from '@/core/store/create'

export default function BoardDetailContainer() {
	const router = useRouter()
	const { loadState } = useContext(LoadingStateContext)
	const [movie, setMovie] = useState({})
	const [open, setOpen] = useState(false)

	useEffect(() => {
		if (router.query.id) {
			boardDetailApi(router.query.id)
				.then(res => {
					setMovie(res.data.data.movie)
				})
				.catch(err => {
					console.log(err)
				})
		}
	}, [router.query.id])

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
			<Meta title="게시판 상세 | Silk Road" desc="게시판 상세 화면입니다."></Meta>
			{!loadState.loading && Object.keys(movie).length > 0 && (
				<div>
					<Card
						image={movie.medium_cover_image}
						header={movie.title}
						meta={movie.title}
						description={movie.description_intro.slice(0, 100) + '...'}
						onClick={() => openModal()}
					/>
					<BoardModal open={open} setOpen={setOpen} movie={movie}></BoardModal>
					<Button onClick={goList}>목록으로</Button>
				</div>
			)}
		</div>
	)
}
