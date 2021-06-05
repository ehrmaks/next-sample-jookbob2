import React, { useEffect, useReducer } from 'react'
import { LoadingStateContext } from '@store/create'
import { loadingInitialState } from '@store/initialState'
import { loadingReducer } from '@store/reducer'
import { useRouter } from 'next/router'

export function LoadingProvider({ children }) {
	const [loadState, loadDispatch] = useReducer(loadingReducer, loadingInitialState)
	const router = useRouter()

	/*
	 * 페이지 이동 시 로딩 없애기
	 */
	useEffect(() => {
		if (loadState.loading)
			loadDispatch({
				type: 'ON_END',
			})
	}, [router.asPath])

	return <LoadingStateContext.Provider value={{ loadState, loadDispatch }}>{children}</LoadingStateContext.Provider>
}
