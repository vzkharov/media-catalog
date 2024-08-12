'use client'

import type { StyleProps } from '~/lib/types'

import { usePaginationUtils } from '~/hooks/usePagination'
import { useMediaFilterState } from '~/features/(media)/use-media-filter-state'

import {
	Pagination,
	PaginationLink,
	PaginationNext,
	PaginationItem,
	PaginationContent,
	PaginationPrevious,
} from '~/components/ui/pagination'

type MediaPaginationProps = StyleProps & {
	total: number
}

const MediaPagination = ({ total, ...props }: MediaPaginationProps) => {
	const [state, setState] = useMediaFilterState(0)

	const setPage = (newPage: number) => setState({ page: newPage })

	const { next, previos, pages, isPrevios } = usePaginationUtils({
		total,
		displayPages: 3,
		page: state.page,
		onPageChange: setPage,
	})

	return (
		<Pagination {...props}>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						onClick={previos}
						aria-disabled={isPrevios}
					/>
				</PaginationItem>

				{pages.map((page, idx) => (
					<PaginationItem key={idx}>
						<PaginationLink
							onClick={() => setPage(page)}
							isActive={page === state.page}
						>
							{page >= 1 && page <= total ? page : '-'}
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
