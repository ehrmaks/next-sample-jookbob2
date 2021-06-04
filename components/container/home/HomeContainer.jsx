import React from 'react'
import { useTranslation } from 'react-i18next'

export default function HomeContainer() {
	const { t } = useTranslation()
	return (
		<div>
			<h1>{t('main')}</h1>
		</div>
	)
}
