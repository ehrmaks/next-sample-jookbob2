import { ConfirmStateContext } from '@/core/store/create'
import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

class ConfirmModal extends Component {
	static contextType = ConfirmStateContext

	componentDidMount() {
		window.setConfirm = this
	}

	showConfirm = (title, msg) => {
		this.context.confirmDispatch({
			type: 'SHOW_CONFIRM',
			title: title,
			msg: msg,
		})
	}

	closeConfirm = () => {
		this.context.confirmDispatch({ type: 'CLOSE_CONFIRM' })
	}

	render() {
		const { size, open, title, msg } = this.context.confirmState
		return (
			<>
				<Modal size={size} open={open} onClose={() => this.closeConfirm()}>
					{title && <Modal.Header>{title}</Modal.Header>}
					<Modal.Content>
						<p>{msg}</p>
					</Modal.Content>
					<Modal.Actions>
						<Button color="red" onClick={() => this.closeConfirm()}>
							취소
						</Button>
						<Button color="blue" onClick={() => this.closeConfirm()}>
							확인
						</Button>
					</Modal.Actions>
				</Modal>
			</>
		)
	}
}

export default ConfirmModal
