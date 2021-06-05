import React, { useReducer } from 'react'
import { UserStateContext } from '@store/create'
import { userInitialState } from '@store/initialState'
import { userReducer } from '@store/reducer'

export function UserProvider({ children }) {
	const [userState, userDispatch] = useReducer(userReducer, userInitialState)

	return <UserStateContext.Provider value={{ userState, userDispatch }}>{children}</UserStateContext.Provider>
}
