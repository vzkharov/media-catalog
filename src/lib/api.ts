import { createFetch, type FetchOptions } from '~/lib/fetch'

const fetchItunes = createFetch('https://itunes.apple.com')

/**
 * @future add other api...
 */

export { fetchItunes }
export type { FetchOptions }
