import type { Media } from '~/entities/media'

import type { MediaResponse } from './types'

const transformMediaResponse = (data: MediaResponse): Media => ({
	kind: data.kind,

	name: data.trackName,
	artist: data.artistName,

	price: data.trackPrice,
	currency: data.currency,

	genre: data.primaryGenreName,
	releaseDate: data.releaseDate,
	duration: data.trackTimeMillis,

	url: data.trackViewUrl,
	artistUrl: data.artistViewUrl,
	thumbnailUrl: data.artworkUrl100,
})

export { transformMediaResponse }
