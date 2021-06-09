import React from 'react'
import Meta from '@comp/common/Meta'
import BoardListContainer from '@container/board/BoardListContainer'
import { useTranslation } from 'react-i18next'

export default function BoardList() {
	const { t } = useTranslation()
	return (
		<>
			<Meta title={t('meta_title_board_list')} desc={t('meta_desc_board_list')}></Meta>
			<BoardListContainer />
		</>
	)
}
