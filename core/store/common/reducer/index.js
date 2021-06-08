import { alertInitialState, confirmInitialState, userInitialState } from '../initialState'
import { constants } from '../constants'

export const alertReducer = (state, { type, title, msg }) => {
	switch (type) {
		case constants.SHOW_ALERT:
			return { ...alertInitialState, open: true, title, msg }
		case constants.CLOSE_ALERT:
			return { ...alertInitialState }
		default:
			break
	}
}

export const confirmReducer = (state, { type, title, msg }) => {
	switch (type) {
		case constants.SHOW_CONFIRM:
			return { ...confirmInitialState, open: true, title, msg }
		case constants.CLOSE_CONFIRM:
			return { ...confirmInitialState }
		default:
			break
	}
}

export const userReducer = (state, { type, payload }) => {
	switch (type) {
		case constants.ADD_USER:
			return payload
		case constants.SET_INIT_USER:
			return userInitialState
		default:
			break
	}
}

export const langReducer = (state, { type, payload }) => {
	switch (type) {
		case constants.SET_LANG:
			return { lang: payload }
		default:
			break
	}
}
