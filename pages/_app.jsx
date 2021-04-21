import 'semantic-ui-css/semantic.min.css'
import '@/styles/globals.scss'
import '@/styles/header.scss'
import '@/styles/footer.scss'
import Footer from '@comp/layouts/Footer'
import Header from '@comp/layouts/Header'
// import UserStore from '@store/UserStore'
import Loading from '@/components/common/Loading'
import AppContainer from '@/components/container/app/AppContainer'
// import LoadingStore from '@/core/store/LoadingStore'
import AlertModal from '@/components/common/AlertModal'
import ConfirmModal from '@/components/common/ConfirmModal'
// import ConfirmStore from '@/core/store/ConfirmStore'
// import AlertStore from '@/core/store/AlertStore'
import Store from '@/core/store'

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Store>
				<Header></Header>
				<div className="container">
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
