enum MediaKind {
	Song = 'song',
	Movie = 'feature-movie',
	Podcast = 'podcast',
	eBook = 'ebook',
	Album = 'album',
	Artist = 'artist',
}

type Media = {
	kind: MediaKind

	name: string
	artist: string

	price: number
	currency: string

	genre: string
	duration: number
	releaseDate: string

	url: string
	artistUrl: string
	thumbnailUrl: string
}

export { MediaKind }
export type { Media }
