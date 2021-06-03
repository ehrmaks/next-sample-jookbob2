import React, { useContext, useEffect, useState } from 'react'
import { AlertStateContext, LoadingStateContext, UserStateContext } from '@/core/store/create'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import styles from '@styles/user/user-login.module.scss'
import { userLogin } from '@/core/api/user/userApi'
import { Button, Form, Icon } from 'semantic-ui-react'

export default function UserLoginContainer() {
	const router = useRouter()
	const { loadState } = useContext(LoadingStateContext)
	const { useAlert } = useContext(AlertStateContext)
	const { userState, userDispatch } = useContext(UserStateContext)
	const [, setCookie] = useCookies(['userInfo'])
	const [loginData, setLoginData] = useState({
		email: '',
		password: '',
	})
	const [msgData, setMsgData] = useState({
		message1: '',
		message2: '',
	})

	useEffect(() => {
		if (userState.accessToken) {
			router.push('/')
		}
	}, [])

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
		if (!loginData.password) {
			setMsgData({
				...msgData,
				message2: '비밀번호를 입력해 주세요.',
			})
			return false
		}
		return true
	}

	const handleClickLogin = () => {
		if (validationChk()) {
			userLogin(loginData)
				.then(res => {
					const resData = res.data

					userDispatch({ type: 'ADD_USER', payload: resData.data })

					setCookie('userInfo', resData.data, {
						// expires: new Date(new Date().getTime() + 3600000),
						domain: location.href.includes('localhost')
							? 'localhost'
							: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
						path: '/',
					})
				})
				.catch(err => {
					console.log({ err })

					if (err.response && err.response.data) {
						const errData = err.response.data
						if (errData.code === 'ST003') {
							setMsgData({
								...msgData,
								message1: errData.message,
							})
						}
					} else useAlert({ title: '서버 오류 알림', msg: err.message })
				})
		}
	}
	return (
		<>
			{!loadState.loading && !userState.accessToken && (
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
									placeholder="아이디를 입력해 주세요."
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
									name="password"
									placeholder="비밀번호를 입력해 주세요."
									value={loginData.password}
									onChange={changeUserData}
								/>
								{msgData.message2 && (
									<div className={styles.login_status}>
										<p>{msgData.message2}</p>
									</div>
								)}
							</div>
						</Form.Field>
						<Button color="blue" size="huge" onClick={() => handleClickLogin()}>
							<Icon name="key"></Icon>
							로그인
						</Button>
					</Form>
				</div>
			)}
		</>
	)
}
