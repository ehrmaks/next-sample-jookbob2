import 'semantic-ui-css/semantic.min.css'
import '@styles/globals.scss'
import '@styles/layouts/header.scss'
import '@styles/layouts/footer.scss'
import Footer from '@comp/layouts/Footer'
import Header from '@comp/layouts/Header'
import AppContainer from '@comp/container/app/AppContainer'
import Store from '@store/index'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Store>
				<Header />
				<AppContainer Component={{ Page: Component, pageProps }} />
				<Footer />
			</Store>
		</>
	)
}

export default MyApp
