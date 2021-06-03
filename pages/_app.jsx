import 'semantic-ui-css/semantic.min.css'
import '@styles/globals.scss'
import '@styles/layouts/header.scss'
import '@styles/layouts/footer.scss'
import Footer from '@comp/layouts/Footer'
import Header from '@comp/layouts/Header'
import Loading from '@comp/common/Loading'
import AppContainer from '@comp/container/app/AppContainer'
import AlertModal from '@comp/common/AlertModal'
import ConfirmModal from '@comp/common/ConfirmModal'
import Store from '@store/index'
import Router from '@comp/common/Router'

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Store>
				<Header></Header>
				<div className="container">
					<Router />
					<Loading />
					<AlertModal />
					<ConfirmModal />
					<AppContainer Component={{ Page: Component, pageProps }} />
				</div>
				<Footer></Footer>
			</Store>
		</div>
	)
}

export default MyApp
