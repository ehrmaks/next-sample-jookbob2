import React from 'react'
import { AlertProvider, ConfirmProvider, LangProvider, LoadingProvider, UserProvider } from '@store/common/providers'
import { BoardApiProvider, UserApiProvider } from '@store/api/providers'
export default function Store({ children }) {
	return (
		<LangProvider>
			<AlertProvider>
				<ConfirmProvider>
					<LoadingProvider>
						<UserProvider>
							<BoardApiProvider>
								<UserApiProvider>{children}</UserApiProvider>
							</BoardApiProvider>
						</UserProvider>
					</LoadingProvider>
				</ConfirmProvider>
			</AlertProvider>
		</LangProvider>
	)
}
