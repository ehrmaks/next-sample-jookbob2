import Meta from '@/components/common/Meta'
import { AlertStateContext, ConfirmStateContext } from '@/core/store/create'
import React, { useContext } from 'react'
import { Button } from 'semantic-ui-react'

export default function Common() {
	const { useAlert } = useContext(AlertStateContext)
	const { useConfirm } = useContext(ConfirmStateContext)

	function showAlert() {
		useAlert({ type: 'SHOW_ALERT', title: '알림창', msg: '알림창 입니다.' })
	}

	function showConfirm() {
		useConfirm({ type: 'SHOW_CONFIRM', title: '확인', msg: '확인내용' })
			.then(() => {
				useAlert({ type: 'SHOW_ALERT', title: '', msg: '확인 되었습니다.' })
			})
			.catch(() => {
				useAlert({ type: 'SHOW_ALERT', title: '', msg: '취소 되었습니다.' })
			})
	}

	return (
		<div>
			<Meta title="공통 컴포넌트 | Silk Road" desc="공통 컴포넌트 입니다." />
			<span>
				<Button onClick={() => showAlert()}>Alert</Button>
			</span>
			<span>
				<Button onClick={() => showConfirm()}>Confirm</Button>
			</span>
		</div>
	)
}
