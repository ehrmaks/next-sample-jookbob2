import { createContext } from 'react'
import { createAsyncDispatcher } from '../utils/createAsyncDispatcher'
import { createAsyncHandler } from '../utils/createAsyncHandler'
import { getBoardDetail, getBoardList } from '@api/board/boardApi'
import { boardConstants } from '../costants/board/index'

console.log('1 board create')

// 컨텍스트를 생성함
export const BoardContext = createContext(null)

// 핸들러를 생성함.
export const boardListHandler = createAsyncHandler(boardConstants.GET_BOARD_LIST, 'boardList')
export const boardDetailHandler = createAsyncHandler(boardConstants.GET_BOARD_DETAIL, 'boardDetail')

// 액션을 핸들링하고, API 호출함.
export const GET_BOARD_LIST = createAsyncDispatcher(boardConstants.GET_BOARD_LIST, getBoardList)
export const GET_BOARD_DETAIL = createAsyncDispatcher(boardConstants.GET_BOARD_DETAIL, getBoardDetail)
