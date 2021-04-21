import React from 'react'
import { Image } from 'semantic-ui-react'

export default function Footer() {
	return (
		<footer className="footer__main">
			<div className="footer__container">
				<div className="footer__row">
					{/* <div className="footer__logo">
					</div> */}
					<div className="footer__items place__self">
						<div className="footer__logo">
							<Image src="/static/images/footer_logo.svg"></Image>
						</div>
					</div>

					<div className="footer__items">
						<div className="footer__utility">
							<a href="#">회사소개</a>
							<span style={{ margin: '0 10px', color: '#dbdada' }}>|</span>
							<a href="#">이용약관</a>
							<span style={{ margin: '0 10px', color: '#dbdada' }}>|</span>
							<a href="#">개인정보처리방침</a>
						</div>
						<div className="footer__source">
							<p>(주) 스타랩스 주소 : 서울 강남구 테헤란로 25길 6-9 석암빌딩 7층</p>
							<p>대표이사 : 이준호 사업자번호:514-88-00884</p>
							<p>Copyright 2020 © STARLABS Corp. All Rights Reserved.</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
