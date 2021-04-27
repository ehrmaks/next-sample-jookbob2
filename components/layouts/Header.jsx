import React, { useContext } from 'react'
import Link from 'next/link'
import { UserStateContext } from '@/core/store/create'

export default function Header() {
	const { userState } = useContext(UserStateContext)

	const handleClickToggleMenu = () => {
		const menu = document.querySelector('.navbar__menu')
		const icons = document.querySelector('.navbar__icons')

		menu.classList.toggle('active')
		icons.classList.toggle('active')
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
								<a>Home</a>
							</Link>
						</li>
						<li className="navbar__border__right">
							<Link href={'/board/board-list'}>
								<a>게시판</a>
							</Link>
						</li>
						<li>
							<Link href={'/common'}>
								<a>공통</a>
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
								<a>로그인</a>
							</Link>
						</li>
					)}
					{!userState.accessToken && (
						<li>
							<Link href="/user/user-join">
								<a>회원가입</a>
							</Link>
						</li>
					)}
				</ul>

				<a href="#" className="navbar__toogleBtn" onClick={handleClickToggleMenu}>
					hamburger
				</a>
			</div>
		</nav>
	)
}
