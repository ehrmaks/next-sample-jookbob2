import { AlertStateContext } from '@store/create'
import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { withTranslation } from 'react-i18next'

class AlertModal extends Component {
	static contextType = AlertStateContext

	componentDidMount() {
		window.setAlert = this
	}

	show = ({ title, msg }) => {
		this.context.alertDispatch({
			type: 'SHOW_ALERT',
			title,
			msg,
		})
	}

	close = () => {
		this.context.alertDispatch({ type: 'CLOSE_ALERT' })
	}

	render() {
		const { size, open, title, msg } = this.context.alertState
		const { t } = this.props
		return (
			<Modal size={size} open={open}>
				{title && <Modal.Header>{title}</Modal.Header>}
				<Modal.Content>
					<p>{msg}</p>
				</Modal.Content>
				<Modal.Actions>
					<Button id="alertSuccess" color="blue" onClick={() => this.close()}>
						{t('button_y')}
					</Button>
				</Modal.Actions>
			</Modal>
		)
	}
}

export default withTranslation()(AlertModal)
