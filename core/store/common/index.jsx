import { AlertProvider, ConfirmProvider, LangProvider, UserProvider } from './providers'

export function CommonProvider({ children }) {
	return (
		<LangProvider>
			<AlertProvider>
				<ConfirmProvider>
					<UserProvider>{children}</UserProvider>
				</ConfirmProvider>
			</AlertProvider>
		</LangProvider>
	)
}
