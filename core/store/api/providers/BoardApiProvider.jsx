import { boardReducer } from '../reducer/boardReducer'
import { initialAsyncState } from '../utils/initialAsyncState'
import { BoardContext } from '../create/boardCreate'
import { useContext, useReducer } from 'react'

// UsersContext 에서 사용 할 기본 상태
const initialState = {
	boardList: initialAsyncState,
	boardDetail: initialAsyncState,
}

export function BoardApiProvider({ children }) {
	const [state, dispatch] = useReducer(boardReducer, initialState)
	return <BoardContext.Provider value={{ state, dispatch }}>{children}</BoardContext.Provider>
}

export function useBoardContext() {
	const { state, dispatch } = useContext(BoardContext)
	if (!state) {
		throw new Error('Cannot find BoardListProvider')
	}
	return { state, dispatch }
}
