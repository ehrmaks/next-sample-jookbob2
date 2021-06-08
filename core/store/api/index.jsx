import { BoardApiProvider, UserApiProvider } from './providers'

export function ApiProvider({ children }) {
	return (
		<BoardApiProvider>
			<UserApiProvider>{children}</UserApiProvider>
		</BoardApiProvider>
	)
}
