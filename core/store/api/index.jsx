import { apiProviderArray } from './providers'
import { Provider } from '@store/config/providerCreate'

export function ApiProvider({ children }) {
	return <Provider contexts={apiProviderArray}>{children}</Provider>
}
