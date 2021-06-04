import Loading from '@comp/common/Loading'
import Router from '@comp/common/Router'
import AlertModal from '@comp/common/AlertModal'
import ConfirmModal from '@comp/common/ConfirmModal'

export default function AppContainer({ Component }) {
	return (
		<div className="container">
			<Router />
			<Loading />
			<AlertModal />
			<ConfirmModal />
			<Component.Page {...Component.pageProps} />
		</div>
	)
}
