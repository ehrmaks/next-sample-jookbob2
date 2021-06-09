import React, { useContext } from 'react'
import Link from 'next/link'
import { LangStateContext, UserStateContext } from '@/core/store/common/create'
import { i18nChangeLanguage } from '@lang/i18n'
import { Dropdown } from 'semantic-ui-react'
import { langOptions } from '@/lang/options'
import { useTranslation } from 'react-i18next'
import { useCookies } from 'react-cookie'
import { constants } from '@store/common/constants'
import { getSession, removeSession } from '@/core/config/session'
import { userInitialState } from '@/core/store/common/initialState'

const { SET_LANG, SET_INIT_USER } = constants

export default function Header() {
	const { t } = useTranslation()
	const { userState, userDispatch } = useContext(UserStateContext)
	const { langState, langDispatch } = useContext(LangStateContext)
	const [cookies, , removeCookie] = useCookies(['userInfo'])

	const handleClickToggleMenu = () => {
		const menu = document.querySelector('.navbar__menu')
		const icons = document.querySelector('.navbar__icons')

		menu.classList.toggle('active')
		icons.classList.toggle('active')
	}

	const handleChangeLang = value => {
		langDispatch({
			type: SET_LANG,
			payload: value,
		})
		i18nChangeLanguage(value)
	}

	const handleClickSignOut = () => {
		if (cookies.userInfo || getSession('userInfo')) {
			userDispatch({
				type: SET_INIT_USER,
				payload: userInitialState,
			})

			// 쿠키를 지움
			removeCookie('userInfo', {
				domain: location.href.includes('localhost') ? 'localhost' : process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
				path: '/',
			})

			removeSession('userInfo')
		}
	}

	return (
		<nav className="navbar">
			<div className="navbar__logo">
				<Link href={'/'}>
					<a>
						<div>
							<img src="/static/images/header_logo.svg" alt="logo" width="200px" />
						</div>
					</a>
				</Link>
			</div>
			<div className="navbar__flex">
				<div className="navbar__menu__frame">
					<ul className="navbar__menu">
						<li className="navbar__border__right">
							<Link href={'/'}>
								<a>{t('menu1')}</a>
							</Link>
						</li>
						<li className="navbar__border__right">
							<Link href={'/board/board-list'}>
								<a>{t('menu2')}</a>
							</Link>
						</li>
						<li>
							<Link href={'/common'}>
								<a>{t('menu3')}</a>
							</Link>
						</li>
					</ul>
				</div>

				{/* {userState.accessToken && (
				)} */}

				<ul className="navbar__icons">
					{userState.accessToken ? (
						<>
							<li className="navbar__border__right">
								<div>
									<span>{userState.name}님</span>
								</div>
							</li>
							<li onClick={handleClickSignOut}>
								<a>로그아웃</a>
							</li>
						</>
					) : (
						<li className="navbar__border__right">
							<Link href="/user/user-login">
								<a>{t('login')}</a>
							</Link>
						</li>
					)}
					{!userState.accessToken && (
						<li>
							<Link href="/user/user-join">
								<a>{t('join')}</a>
							</Link>
						</li>
					)}
				</ul>

				<a href="#" className="navbar__toogleBtn" onClick={handleClickToggleMenu}>
					hamburger
				</a>
			</div>
			<div className="navbar__lang">
				<Dropdown
					className="navbar__lang__select"
					options={langOptions}
					search
					selection
					onChange={(e, data) => handleChangeLang(data.value)}
					value={langState.lang}
				/>
			</div>
		</nav>
	)
}
