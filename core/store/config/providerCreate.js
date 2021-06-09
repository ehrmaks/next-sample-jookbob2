import React from 'react'

export const Provider = ({ contexts, children }) =>
	contexts.reduce(
		(prev, context) =>
			React.createElement(context, {
				children: prev,
			}),
		children,
	)
