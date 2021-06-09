import React, { Component } from 'react'
import { withRouter } from 'next/router'
import { UserStateContext } from '@/core/store/common/create'
import { constants } from '@store/common/constants'
import { withCookies } from 'react-cookie'
import { removeSession } from '@/core/config/session'
import { userInitialState } from '@store/common/initialState'

const { SET_INIT_USER } = constants

class UserInfo extends Component {
	static contextType = UserStateContext

	componentDidMount() {
		window.userInfo = this
	}

	remove = () => {
		removeSession('userInfo')

		this.context.userDispatch({
			type: SET_INIT_USER,
			payload: userInitialState,
		})

		this.props.cookies.remove('userInfo', {
			domain: location.href.includes('localhost') ? 'localhost' : process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
			path: '/',
		})
	}

	render() {
		return <></>
	}
}

export default withCookies(withRouter(UserInfo))
