import React from 'react'
import { apiProviderArray } from './providers'

const Provider = ({ contexts, children }) =>
	contexts.reduce(
		(prev, context) =>
			React.createElement(context, {
				children: prev,
			}),
		children,
	)

export function ApiProvider({ children }) {
	return <Provider contexts={apiProviderArray}>{children}</Provider>
}
