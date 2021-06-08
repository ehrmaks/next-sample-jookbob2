import Router from '@comp/common/Router'
import AlertModal from '@comp/common/AlertModal'
import ConfirmModal from '@comp/common/ConfirmModal'
import Cookie from '@/components/common/Cookie'

export default function AppContainer({ Component }) {
	return (
		<div className={'container'}>
			<Router />
			<AlertModal />
			<ConfirmModal />
			<Cookie />
			<Component.Page {...Component.pageProps} />
		</div>
	)
}
