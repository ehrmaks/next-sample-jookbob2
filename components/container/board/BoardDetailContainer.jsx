import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Button, Card } from 'semantic-ui-react'
import { boardDetail as boardDetailApi } from '@api/board/boardApi'
import BoardModal from '@comp/children/board/BoardModal'
import { useTranslation } from 'react-i18next'

export default function BoardDetailContainer() {
	const { t } = useTranslation()
	const router = useRouter()
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
			{Object.keys(movie).length > 0 && (
				<div>
					<Card
						image={movie.medium_cover_image}
						header={movie.title}
						meta={movie.title}
						description={movie.description_intro.slice(0, 100) + '...'}
						onClick={() => openModal()}
					/>
					<BoardModal open={open} setOpen={setOpen} movie={movie}></BoardModal>
					<Button onClick={goList}>{t('button_golist')}</Button>
				</div>
			)}
		</div>
	)
}
