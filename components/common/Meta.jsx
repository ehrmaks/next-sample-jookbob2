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
	title: 'Silkroad',
	desc: '실크로드입니다.',
}
