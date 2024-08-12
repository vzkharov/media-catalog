'use client'

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { mediaTypeConfig } from '~/config/media-type'

import { useMediaFilterState } from '~/features/(media)/use-media-filter-state'

import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs'

const NO_VALUE = ''

const MediaFilterType = ({ style, className }: StyleProps) => {
	const [state, setState] = useMediaFilterState(0)

	return (
		<div
			style={style}
			className={cn('bg-muted rounded-md max-md:overflow-x-scroll', className)}
		>
			<Tabs
				defaultValue={state.type}
				onValueChange={(value: string) => setState({ page: 1, type: value })}
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
