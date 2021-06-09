import React from 'react'

import { AlertProvider, ConfirmProvider, LangProvider, UserProvider } from './providers'

const Provider = ({ contexts, children }) =>
	contexts.reduce(
		(prev, context) =>
			React.createElement(context, {
				children: prev,
			}),
		children,
	)

export function CommonProvider({ children }) {
	return (
		// <LangProvider>
		// 	<AlertProvider>
		// 		<ConfirmProvider>
		// 			<UserProvider>{children}</UserProvider>
		// 		</ConfirmProvider>
		// 	</AlertProvider>
		// </LangProvider>
		<Provider contexts={[AlertProvider, ConfirmProvider, LangProvider, UserProvider]}>{children}</Provider>
	)
}
