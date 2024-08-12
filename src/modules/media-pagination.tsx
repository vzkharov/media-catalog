'use client'

import type { StyleProps } from '~/lib/types'

import { useMediaPagination } from '~/features/(media)/useMediaPagination'

import {
	Pagination,
	PaginationLink,
	PaginationNext,
	PaginationItem,
	PaginationContent,
	PaginationPrevious,
} from '~/components/ui/pagination'

const MediaPagination = (props: StyleProps) => {
	const [currentPage, { set, pages, isPrevious, next, previos }] = useMediaPagination({
		defaultValue: 1,
		displayPages: 3,
	})

	return (
		<Pagination {...props}>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						onClick={previos}
						aria-disabled={!isPrevious}
					/>
				</PaginationItem>

				{pages.map((page, idx) => (
					<PaginationItem key={idx}>
						<PaginationLink
							onClick={() => set(page)}
							isActive={page === currentPage}
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
