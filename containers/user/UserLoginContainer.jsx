import React, { useContext, useEffect, useState } from 'react'
import { UserStateContext } from '@/core/store/common/create'
import { useRouter } from 'next/router'
import styles from '@styles/user/user-login.module.scss'
import { Button, Form, Icon } from 'semantic-ui-react'
import { useTranslation } from 'react-i18next'
import { useUserContext } from '@/core/store/api/providers/UserApiProvider'
import { POST_USER_LOGIN } from '@/core/store/api/create/userCreate'
import Loading from '@/components/common/Loading'

export default function UserLoginContainer() {
	const { t } = useTranslation()
	const router = useRouter()
	const { userState } = useContext(UserStateContext)
	const { state, dispatch } = useUserContext()
	const { loading } = state.userLogin
	const [loginData, setLoginData] = useState({
		email: '',
		passwd: '',
	})
	const [msgData, setMsgData] = useState({
		message1: '',
		message2: '',
	})

	useEffect(() => {
		if (userState.accessToken) {
			router.push('/')
		}
	}, [userState.accessToken])

	const changeUserData = e => {
		setLoginData({
			...loginData,
			[e.target.name]: e.target.value,
		})

		setMsgData({
			message1: '',
			message2: '',
		})
	}

	const validationChk = () => {
		if (!loginData.email) {
			setMsgData({
				...msgData,
				message1: '아이디를 입력해 주세요.',
			})
			return false
		}
		if (!loginData.passwd) {
			setMsgData({
				...msgData,
				message2: '비밀번호를 입력해 주세요.',
			})
			return false
		}
		return true
	}

	const handleClickLogin = () => {
		if (validationChk()) POST_USER_LOGIN(dispatch, loginData)
	}
	return (
		<>
			{!userState.accessToken && (
				<>
					{loading && <Loading />}
					<div className={styles.wrap}>
						<div className={styles.login_header}>
							<img src="/static/images/header_logo.svg" alt="logo" width="200px" />
						</div>
						<Form>
							<Form.Field>
								<div className={styles.login_div}>
									<input
										style={{ border: 'none', borderBottom: 'solid 1px #263343', width: 400 }}
										type="text"
										name="email"
										placeholder={t('login_holder_id')}
										value={loginData.email}
										onChange={changeUserData}
									/>
									{msgData.message1 && (
										<div className={styles.login_status}>
											<p>{msgData.message1}</p>
										</div>
									)}
								</div>
							</Form.Field>
							<Form.Field>
								<div className={styles.login_div}>
									<input
										style={{ border: 'none', borderBottom: 'solid 1px #263343', width: 400 }}
										type="password"
										name="passwd"
										placeholder={t('login_holder_passwd')}
										value={loginData.passwd}
										onChange={changeUserData}
									/>
									{msgData.message2 && (
										<div className={styles.login_status}>
											<p>{msgData.message2}</p>
										</div>
									)}
								</div>
							</Form.Field>
							{!loading ? (
								<Button color="blue" size="huge" onClick={() => handleClickLogin()}>
									<Icon name="key"></Icon>
									{t('login')}
								</Button>
							) : (
								<Button color="blue" size="huge">
									{t('wait')}
									<Icon name="exclamation"></Icon>
								</Button>
							)}
						</Form>
					</div>
				</>
			)}
		</>
	)
}
