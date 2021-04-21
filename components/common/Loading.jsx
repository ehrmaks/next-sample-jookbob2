import { LoadingStateContext } from '@/core/store/create'
import React, { Component } from 'react'
import { Loader } from 'semantic-ui-react'

class Loading extends Component {
	static contextType = LoadingStateContext

	componentDidMount() {
		window.loading = this
	}

	onStart = () => {
		this.context.loadDispatch({ type: 'ON_START', payload: true })
	}

	onEnd = () => {
		this.context.loadDispatch({ type: 'ON_END', payload: false })
	}

	render() {
		return (
			<>
				{this.context.loadState.loading && (
					<div style={{ padding: '150px 0' }}>
						<Loader active inline="centered">
							Loading
						</Loader>
					</div>
				)}
			</>
		)
	}
}

export default Loading
