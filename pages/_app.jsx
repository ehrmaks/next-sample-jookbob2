import 'semantic-ui-css/semantic.min.css'
import '@/styles/globals.scss'
import '@/styles/header.scss'
import '@/styles/footer.scss'
import Footer from '@comp/layouts/Footer'
import Header from '@comp/layouts/Header'
import Loading from '@/components/common/Loading'
import AppContainer from '@/components/container/app/AppContainer'
import AlertModal from '@/components/common/AlertModal'
import ConfirmModal from '@/components/common/ConfirmModal'
import Store from '@/core/store'
import Router from '@/components/common/Router'

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
					<AppContainer Comp={{ Page: Component, pageProps }}></AppContainer>
				</div>
				<Footer></Footer>
			</Store>
		</div>
	)
}

export default MyApp
