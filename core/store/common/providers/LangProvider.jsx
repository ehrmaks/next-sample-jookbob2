import React, { useEffect, useReducer } from 'react'
import { LangStateContext } from '@store/common/create'
import { langInitialState } from '@store/common/initialState'
import { langReducer } from '@store/common/reducer'
import { getLocale, i18nChangeLanguage } from '@lang/i18n'

export function LangProvider({ children }) {
	const [langState, langDispatch] = useReducer(langReducer, langInitialState)

	/*
	 * 기본 언어 설정
	 */
	useEffect(() => {
		langDispatch({
			type: 'SET_LANG',
			payload: getLocale(),
		})

		i18nChangeLanguage(getLocale())
	}, [])

	return <LangStateContext.Provider value={{ langState, langDispatch }}>{children}</LangStateContext.Provider>
}
