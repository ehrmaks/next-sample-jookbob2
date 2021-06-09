import Router from '@comp/common/Router'
import AlertModal from '@comp/common/AlertModal'
import ConfirmModal from '@comp/common/ConfirmModal'
import Cookie from '@comp/common/Cookie'
import UserInfo from '@comp/common/UserInfo'

export default function AppContainer({ Component }) {
	return (
		<div className={'container'}>
			<Router />
			<AlertModal />
			<ConfirmModal />
			<Cookie />
			<UserInfo />
			<Component.Page {...Component.pageProps} />
		</div>
	)
}
