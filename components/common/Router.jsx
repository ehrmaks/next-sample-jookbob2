import React, { Component } from 'react'
import { withRouter } from 'next/router'

class Router extends Component {
	componentDidMount() {
		window.router = this.props.router
	}

	render() {
		return <></>
	}
}

export default withRouter(Router)
