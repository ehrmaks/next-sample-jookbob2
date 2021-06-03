import { LoadingStateContext } from '@/core/store/create'
import React, { useContext } from 'react'

export default function HomeContainer() {
	const { loadState } = useContext(LoadingStateContext)
	return <>{!loadState.loading && <h1>Welcome to Silkroad</h1>}</>
}
