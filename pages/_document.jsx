import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}
	render() {
		return (
			<Html lang="ko">
				<Head>
					<meta charSet="utf-8" />
					<meta name="keywords" content="blog,react,antd,webpack,css,javascript" />
					<link rel="shortcut icon" href="/static/favicon.ico" />
					<link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/notosanskr.css" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
