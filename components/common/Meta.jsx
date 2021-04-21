import Head from 'next/head'
import React from 'react'

export default function Meta({ title, desc }) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={desc} />
		</Head>
	)
}

Meta.defaultProps = {
	title: 'Home',
	desc: '홈 입니다.',
}
