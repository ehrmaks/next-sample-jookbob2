import React from 'react'
import { AlertProvider, ConfirmProvider, LangProvider, LoadingProvider, UserProvider } from '@store/providers'

export default function Store({ children }) {
	return (
		<LangProvider>
			<AlertProvider>
				<ConfirmProvider>
					<LoadingProvider>
						<UserProvider>{children}</UserProvider>
					</LoadingProvider>
				</ConfirmProvider>
			</AlertProvider>
		</LangProvider>
	)
}
