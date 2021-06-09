import { commonProviderArray } from './providers'
import { Provider } from '@store/config/providerCreate'

export function CommonProvider({ children }) {
	return <Provider contexts={commonProviderArray}>{children}</Provider>
}
