import { MediaList } from '~/modules/media-list'
import { MediaPagination } from '~/modules/media-pagination'
import { MediaFilterType } from '~/modules/media-filter-type'
import { MediaSearchInput } from '~/modules/media-search-input'

import styles from './styles.module.css'

type SearchParams = { page?: number; type?: string; q?: string; limit?: number }

const SearchPage = async ({ searchParams }: { searchParams: SearchParams }) => {
	const { q, type } = searchParams

	const page = Number(searchParams?.page) || 1
	const limit = Number(searchParams?.limit) || 9

	const params = { q, type, page, limit }

	return (
		<>
			<div className={styles.media__filters}>
				<MediaSearchInput />
				<MediaFilterType />
			</div>

			<div className={styles.media__list}>
				<MediaList {...params} />
			</div>

			<MediaPagination />
		</>
	)
}

/**
 * @todo according to search params
 * const generateMetadata = async () => {}
 */

export default SearchPage
