import React, { useReducer } from 'react'
import { ConfirmStateContext } from '@store/common/create'
import { confirmInitialState } from '@store/common/initialState'
import { confirmReducer } from '@store/common/reducer'
import { constants } from '@store/common/constants'

const { SHOW_CONFIRM } = constants

export function ConfirmProvider({ children }) {
	const [confirmState, confirmDispatch] = useReducer(confirmReducer, confirmInitialState)

	/*
	 * Confirm Modal
	 * @param title(제목), msg(메시지)
	 * @return Promise
	 */
	function useConfirm({ title, msg }) {
		if (!confirmDispatch) throw new Error('Cannot find ConfirmProvider')

		confirmDispatch({ type: SHOW_CONFIRM, title, msg })

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const successElement = document.querySelector('#confirmSuccess')
				const cancelElement = document.querySelector('#confirmCancel')
				if (successElement) {
					successElement.addEventListener('click', () => {
						resolve()
					})
				}
				if (cancelElement) {
					cancelElement.addEventListener('click', () => {
						reject()
					})
				}
			}, 0)
		})
	}

	return (
		<ConfirmStateContext.Provider value={{ confirmState, confirmDispatch, useConfirm }}>
			{children}
		</ConfirmStateContext.Provider>
	)
}
