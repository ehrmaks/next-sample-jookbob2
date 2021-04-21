import Meta from '@/components/common/Meta'
import { AlertStateContext, ConfirmStateContext } from '@/core/store/create'
import React, { useContext } from 'react'
import { Button } from 'semantic-ui-react'

export default function Common() {
	const { alertDispatch } = useContext(AlertStateContext)
	const { confirmDispatch } = useContext(ConfirmStateContext)

	function showAlert() {
		alertDispatch({ type: 'SHOW_ALERT', title: '알림창', msg: '알림창 입니다.' })
	}

	function showConfirm() {
		confirmDispatch({ type: 'SHOW_CONFIRM', title: '확인창', msg: '확인창 입니다.' })
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
