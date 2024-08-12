import { MediaKind } from '~/entities/media'

type MediaResponse = {
	kind: MediaKind

	artistName: string
	trackName: string

	currency: string
	trackPrice: number

	releaseDate: string

	trackTimeMillis: number

	primaryGenreName: string

	trackViewUrl: string
	artistViewUrl: string

	artworkUrl100: string
}

export type { MediaResponse }
