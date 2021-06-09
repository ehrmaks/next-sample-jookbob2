import React from 'react'
import { commonProviderArray } from './providers'

const Provider = ({ contexts, children }) =>
	contexts.reduce(
		(prev, context) =>
			React.createElement(context, {
				children: prev,
			}),
		children,
	)

export function CommonProvider({ children }) {
	return <Provider contexts={commonProviderArray}>{children}</Provider>
}
