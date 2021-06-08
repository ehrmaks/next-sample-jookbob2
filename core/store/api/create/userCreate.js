import { createContext } from 'react'
import { createAsyncDispatcher } from '../utils/createAsyncDispatcher'
import { createAsyncHandler } from '../utils/createAsyncHandler'
import { postUserLogin } from '@api/user/userApi'
import { userConstants } from '../costants/user'

console.log('1 user create')

// 컨텍스트를 생성함
export const UserContext = createContext(null)

// 핸들러를 생성함.
export const userLoginHandler = createAsyncHandler(userConstants.POST_USER_LOGIN, 'userLogin')

// 액션을 핸들링하고, API 호출함.
export const POST_USER_LOGIN = createAsyncDispatcher(userConstants.POST_USER_LOGIN, postUserLogin)
