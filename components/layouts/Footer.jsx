import React from 'react'
import { Image } from 'semantic-ui-react'
import { useTranslation } from 'react-i18next'

export default function Footer() {
	const { t } = useTranslation()
	return (
		<footer className="footer__main">
			<div className="footer__container">
				<div className="footer__row">
					<div className="footer__items place__self">
						<div className="footer__logo">
							<Image src="/static/images/footer_logo.svg"></Image>
						</div>
					</div>

					<div className="footer__items">
						<div className="footer__utility">
							<a href="#">{t('footer_intro')}</a>
							<span style={{ margin: '0 10px', color: '#dbdada' }}>|</span>
							<a href="#">{t('footer_terms')}</a>
							<span style={{ margin: '0 10px', color: '#dbdada' }}>|</span>
							<a href="#">{t('footer_privacy')}</a>
						</div>
						<div className="footer__source">
							<p>
								{t('footer_addr0')} : {t('footer_addr1')}
							</p>
							<p>
								{t('footer_ceo0')} : {t('footer_ceo1')} {t('footer_saupno0')} : {t('footer_saupno1')}
							</p>
							<p>Copyright 2020 © STARLABS Corp. All Rights Reserved.</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
