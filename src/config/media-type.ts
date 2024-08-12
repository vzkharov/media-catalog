import { MediaKind } from '~/entities/media'

type MediaTypeConfig = {
	value: string
	title: string
}

const mediaTypeConfig = {
	[MediaKind.Song]: {
		value: 'music',
		title: 'Music',
	},
	[MediaKind.Movie]: {
		value: 'movie',
		title: 'Movie',
	},
	[MediaKind.Podcast]: {
		value: 'podcast',
		title: 'Podcast',
	},
	[MediaKind.eBook]: {
		value: 'ebook',
		title: 'eBook',
	},
	[MediaKind.Album]: {
		value: 'album',
		title: 'Album',
	},
	[MediaKind.Artist]: {
		value: 'artist',
		title: 'Artist',
	},
} satisfies Record<MediaKind, MediaTypeConfig>

export { mediaTypeConfig }
