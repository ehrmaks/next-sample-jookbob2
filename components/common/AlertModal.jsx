import { AlertStateContext } from '@/core/store/create'
import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

class AlertModal extends Component {
	static contextType = AlertStateContext

	componentDidMount() {
		window.setAlert = this
	}

	show = (title, msg) => {
		this.context.alertDispatch({
			type: 'SHOW_ALERT',
			title: title,
			msg: msg,
		})
	}

	close = () => {
		this.context.alertDispatch({ type: 'CLOSE_ALERT' })
	}

	render() {
		const { size, open, title, msg } = this.context.alertState
		return (
			<>
				<Modal size={size} open={open}>
					{title && <Modal.Header>{title}</Modal.Header>}
					<Modal.Content>
						<p>{msg}</p>
					</Modal.Content>
					<Modal.Actions>
						<Button id="alertSuccess" color="blue" onClick={() => this.close()}>
							확인
						</Button>
					</Modal.Actions>
				</Modal>
			</>
		)
	}
}

export default AlertModal
