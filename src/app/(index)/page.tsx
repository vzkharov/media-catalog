import { convertRawState } from '~/features/(media)/use-media-filter-state/utils'

import { MediaList } from '~/modules/media-list'
import { MediaPagination } from '~/modules/media-pagination'
import { MediaFilterType } from '~/modules/media-filter-type'
import { MediaSearchInput } from '~/modules/media-search-input'

import styles from './styles.module.css'

type SearchParams = { state?: string }

const LIMIT = 9
const MAX_ITEMS = 200
const PAGES = Math.ceil(MAX_ITEMS / LIMIT)

const SearchPage = async ({ searchParams }: { searchParams: SearchParams }) => {
	const { state: rawState } = searchParams

	const state = convertRawState(rawState)

	return (
		<>
			<div className={styles.media__filters}>
				<MediaSearchInput />
				<MediaFilterType />
			</div>

			<div className={styles.media__list}>
				<MediaList
					{...state}
					limit={LIMIT}
				/>
			</div>

			<MediaPagination total={PAGES} />
		</>
	)
}

/**
 * @todo according to search params
 * const generateMetadata = async () => {}
 */

export default SearchPage
