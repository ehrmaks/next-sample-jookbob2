import { ConfirmStateContext } from '@store/create'
import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { withTranslation } from 'react-i18next'

class ConfirmModal extends Component {
	static contextType = ConfirmStateContext

	componentDidMount() {
		window.setConfirm = this
	}

	show = (title, msg) => {
		this.context.confirmDispatch({
			type: 'SHOW_CONFIRM',
			title,
			msg,
		})
	}

	close = () => {
		this.context.confirmDispatch({ type: 'CLOSE_CONFIRM' })
	}

	render() {
		const { size, open, title, msg } = this.context.confirmState
		const { t } = this.props
		return (
			<Modal size={size} open={open}>
				{title && <Modal.Header>{title}</Modal.Header>}
				<Modal.Content>
					<p>{msg}</p>
				</Modal.Content>
				<Modal.Actions>
					<Button id="confirmCancel" color="red" onClick={() => this.close()}>
						{t('button_n')}
					</Button>
					<Button id="confirmSuccess" color="blue" onClick={() => this.close()}>
						{t('button_y')}
					</Button>
				</Modal.Actions>
			</Modal>
		)
	}
}

export default withTranslation()(ConfirmModal)
