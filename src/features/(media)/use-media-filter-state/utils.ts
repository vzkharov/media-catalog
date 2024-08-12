import type { FilterState } from './types'

const defaultFilterState = {
	q: '',
	type: '',
	page: 1,
} satisfies FilterState

const convertRawState = (stateStr?: string): FilterState => {
	const rawState = JSON.parse(stateStr || '{}') as unknown as FilterState

	return {
		q: rawState.q || defaultFilterState.q,
		type: rawState.type || defaultFilterState.type,
		page: Number(rawState.page) || defaultFilterState.page,
	}
}

export { convertRawState, defaultFilterState }
