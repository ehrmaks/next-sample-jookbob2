import React from 'react'
import { Loader } from 'semantic-ui-react'

export default function Loading() {
	return (
		<div style={{ position: 'absolute' }}>
			<Loader active inline="centered">
				Loading
			</Loader>
		</div>
	)
}
