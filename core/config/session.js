export function setSession(key, value) {
	if (!key) throw new Error('key undefined')
	if (!value) throw new Error('value undefined')

	window.localStorage.setItem(key, JSON.stringify(value))
}

export function getSession(key) {
	if (!key) throw new Error('key undefined')

	return JSON.parse(window.localStorage.getItem(key))
}

export function removeSession(key) {
	if (!key) throw new Error('key undefined')

	window.localStorage.removeItem(key)
}
