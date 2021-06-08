import React, { useContext } from 'react'
import { AlertStateContext, ConfirmStateContext } from '@/core/store/common/create'
import { Button } from 'semantic-ui-react'
import { useTranslation } from 'react-i18next'

export default function CommonContainer() {
	const { t } = useTranslation()
	const { useAlert } = useContext(AlertStateContext)
	const { useConfirm } = useContext(ConfirmStateContext)

	function showAlert() {
		useAlert({ title: '알림창', msg: '알림창 입니다.' })
	}

	function showConfirm() {
		useConfirm({ title: '확인', msg: '확인내용' })
			.then(() => {
				useAlert({ msg: '확인 되었습니다.' })
			})
			.catch(() => {
				useAlert({ msg: '취소 되었습니다.' })
			})
	}

	return (
		<div>
			<span>
				<Button onClick={() => showAlert()}>{t('button_alert')}</Button>
			</span>
			<span>
				<Button onClick={() => showConfirm()}>{t('button_confirm')}</Button>
			</span>
		</div>
	)
}
