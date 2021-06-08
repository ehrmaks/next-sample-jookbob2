import { boardConstants } from '../costants/board'
import { boardListHandler, boardDetailHandler } from '../create/boardCreate'

// 위에서 만든 객체 / 유틸 함수들을 사용하여 리듀서 작성
export function boardReducer(state, action) {
	switch (action.type) {
		case boardConstants.GET_BOARD_LIST:
		case boardConstants.GET_BOARD_LIST_SUCCESS:
		case boardConstants.GET_BOARD_LIST_ERROR:
			return boardListHandler(state, action)
		case boardConstants.GET_BOARD_DETAIL:
		case boardConstants.GET_BOARD_DETAIL_SUCCESS:
		case boardConstants.GET_BOARD_DETAIL_ERROR:
			return boardDetailHandler(state, action)
		default:
			throw new Error(`Unhanded action type: ${action.type}`)
	}
}
