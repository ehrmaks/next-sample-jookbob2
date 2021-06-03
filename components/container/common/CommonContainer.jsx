import React, { useContext } from 'react'
import { AlertStateContext, ConfirmStateContext, LoadingStateContext } from '@/core/store/create'
import { Button } from 'semantic-ui-react'

export default function CommonContainer() {
	const { loadState } = useContext(LoadingStateContext)
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
		<>
			{!loadState.loading && (
				<div>
					<span>
						<Button onClick={() => showAlert()}>Alert</Button>
					</span>
					<span>
						<Button onClick={() => showConfirm()}>Confirm</Button>
					</span>
				</div>
			)}
		</>
	)
}
