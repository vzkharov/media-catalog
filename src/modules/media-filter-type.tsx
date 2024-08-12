'use client'

import { useCallback } from 'react'

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { mediaTypeConfig } from '~/config/media-type'
import { useMediaFilterType } from '~/features/(media)/useMediaFilterType'
import { useMediaPagination } from '~/features/(media)/useMediaPagination'

import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs'

const NO_VALUE = ''

const MediaFilterType = ({ style, className }: StyleProps) => {
	const [_, { set }] = useMediaPagination()
	const [filterType, setFilterType] = useMediaFilterType(NO_VALUE)

	const handleChange = useCallback(
		(value: string) => {
			console.log(value)
			setFilterType(value)
			set(1)
		},
		[set, setFilterType]
	)

	return (
		<div
			style={style}
			className={cn('bg-muted rounded-md max-md:overflow-x-scroll', className)}
		>
			<Tabs
				defaultValue={filterType}
				onValueChange={handleChange}
			>
				<TabsList>
					<TabsTrigger value={NO_VALUE}>All</TabsTrigger>

					{[
						mediaTypeConfig.song,
						mediaTypeConfig['feature-movie'],
						mediaTypeConfig.podcast,
						mediaTypeConfig.ebook,
					].map(({ value, title }) => (
						<TabsTrigger
							key={value}
							value={value}
						>
							{title}
						</TabsTrigger>
					))}
				</TabsList>
			</Tabs>
		</div>
	)
}

export { MediaFilterType }
