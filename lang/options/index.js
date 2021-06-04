import { resource } from '@lang/resource'

export const langOptions = Object.values(resource).map(rsc => Object.assign({ value: rsc.value, text: rsc.text }))
