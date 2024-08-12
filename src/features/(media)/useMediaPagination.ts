import { useMemo, useCallback } from 'react'

import { useQueryState } from '~/hooks/useQueryState'

type UseMediaPaginationArgs = Partial<{
	defaultValue: number
	displayPages: number
}>

const useMediaPagination = (args: UseMediaPaginationArgs = {}) => {
	const { defaultValue = 1, displayPages = 3 } = args

	const [queryPage, set] = useQueryState<number>('page', { debounce: 0 })
	const currentPage = useMemo(() => Number(queryPage || defaultValue), [queryPage, defaultValue])

	const pages = useMemo(() => {
		const range = new Array(displayPages + 1).fill(0).map((_, idx) => idx + currentPage - 2)

		if (currentPage > 0) {
			range.shift()
		} else {
			range.pop()
		}

		return range
	}, [currentPage, displayPages])

	const next = useCallback(() => set(currentPage + 1), [set, currentPage])
	const previos = useCallback(() => currentPage > 1 && set(currentPage - 1), [set, currentPage])

	return [currentPage, { set, next, previos, pages, isPrevious: currentPage !== 0 }] as const
}

export { useMediaPagination }
