import React, { useReducer } from 'react'
import { UserStateContext } from '@store/common/create'
import { userInitialState } from '@store/common/initialState'
import { userReducer } from '@store/common/reducer'

export function UserProvider({ children }) {
	const [userState, userDispatch] = useReducer(userReducer, userInitialState)

	return <UserStateContext.Provider value={{ userState, userDispatch }}>{children}</UserStateContext.Provider>
}
