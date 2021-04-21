import { alertInitialState, confirmInitialState, loadingInitialState, userInitialState } from '../initialState'

export const alertReducer = (state, { type, title, msg }) => {
	switch (type) {
		case 'SHOW_ALERT':
			return { ...alertInitialState, open: true, title, msg }
		case 'CLOSE_ALERT':
			return { ...alertInitialState }
		default:
			break
	}
}

export const confirmReducer = (state, { type, title, msg }) => {
	switch (type) {
		case 'SHOW_CONFIRM':
			return { ...confirmInitialState, open: true, title, msg }
		case 'CLOSE_CONFIRM':
			return { ...confirmInitialState }
		default:
			break
	}
}

export const loadingReducer = (state, { type, payload }) => {
	switch (type) {
		case 'ON_START':
			return { loading: payload }
		case 'ON_END':
			return { ...loadingInitialState }
		default:
			break
	}
}

export const userReducer = (state, { type, payload }) => {
	switch (type) {
		case 'ADD_USER':
			return payload
		case 'SET_INIT_USER':
			return userInitialState
		default:
			break
	}
}
