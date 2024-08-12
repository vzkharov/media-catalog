import { fetchItunes } from '~/lib/api'

import type { MediaResponse } from './types'
import { transformMediaResponse } from './utils'

type MediaSearchParams = Partial<{
	q: string
	type: string
	page: number
	limit: number
}>

type MediaSearchResponse = {
	resultCount: number
	results: MediaResponse[]
}

const fetchMediaSearch = async (args: MediaSearchParams = {}) => {
	const { q, type, page = 1, limit = 9 } = args

	const offset = limit * (page - 1)

	const params = { limit, offset, term: q, media: type }

	return fetchItunes<MediaSearchResponse>('/search', {
		params,
	}).then((data) => data.results.map(transformMediaResponse))
}

export { fetchMediaSearch }
export type { MediaSearchParams }
