'use client'

import { useCallback, useMemo } from 'react'

import type { StyleProps } from '~/lib/types'

import { useMediaFilterState } from '~/features/(media)/use-media-filter-state'

import {
	Pagination,
	PaginationLink,
	PaginationNext,
	PaginationItem,
	PaginationContent,
	PaginationPrevious,
} from '~/components/ui/pagination'

const DISPLAY_PAGES = 3

const MediaPagination = (props: StyleProps) => {
	const [state, setState] = useMediaFilterState(0)

	const pages = useMemo(() => {
		const range = new Array(DISPLAY_PAGES + 1).fill(0).map((_, idx) => idx + state.page - 2)

		if (state.page > 0) {
			range.shift()
		} else {
			range.pop()
		}

		return range
	}, [state.page])

	const setCurrentPage = useCallback((newPage: number) => setState({ page: newPage }), [setState])

	const next = useCallback(() => setCurrentPage(state.page + 1), [setCurrentPage, state.page])
	const previos = useCallback(
		() => state.page > 1 && setCurrentPage(state.page - 1),
		[setCurrentPage, state.page]
	)

	return (
		<Pagination {...props}>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						onClick={previos}
						aria-disabled={state.page <= 1}
					/>
				</PaginationItem>

				{pages.map((page, idx) => (
					<PaginationItem key={idx}>
						<PaginationLink
							onClick={() => setCurrentPage(page)}
							isActive={page === state.page}
						>
							{page >= 1 ? page : '-'}
						</PaginationLink>
					</PaginationItem>
				))}

				<PaginationItem>
					<PaginationNext onClick={next} />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	)
}

export { MediaPagination }
