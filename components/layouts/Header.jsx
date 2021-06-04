import React, { useContext } from 'react'
import Link from 'next/link'
import { LangStateContext, UserStateContext } from '@store/create'
import { i18nChangeLanguage } from '@lang/i18n'
import { Dropdown } from 'semantic-ui-react'
import { langOptions } from '@/lang/options'
import { useTranslation } from 'react-i18next'

export default function Header() {
	const { t } = useTranslation()
	const { userState } = useContext(UserStateContext)
	const { langState, langDispatch } = useContext(LangStateContext)

	const handleClickToggleMenu = () => {
		const menu = document.querySelector('.navbar__menu')
		const icons = document.querySelector('.navbar__icons')

		menu.classList.toggle('active')
		icons.classList.toggle('active')
	}

	const handleChangeLang = value => {
		langDispatch({
			type: 'SET_LANG',
			payload: value,
		})
		i18nChangeLanguage(value)
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
				{userState.accessToken && (
					<div className="navbar__username">
						<span>{userState.userNm}님</span>
					</div>
				)}

				<ul className="navbar__icons">
					{userState.accessToken ? (
						<li>signout</li>
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
