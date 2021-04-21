import Meta from '@/components/common/Meta'
import { AlertStateContext, ConfirmStateContext, LoadingStateContext } from '@/core/store/create'
import React, { useContext } from 'react'
import { Button } from 'semantic-ui-react'

export default function Common() {
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
			<Meta title="공통 컴포넌트 | Silk Road" desc="공통 컴포넌트 입니다." />
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
