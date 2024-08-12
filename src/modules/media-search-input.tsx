'use client'

import { ChangeEvent, useCallback } from 'react'

import { useMediaSearch } from '~/features/(media)/useMediaSearch'
import { useMediaPagination } from '~/features/(media)/useMediaPagination'

import { Input, type InputProps } from '~/components/ui/input'

const MediaSearchInput = (props: InputProps) => {
	const [_, { set }] = useMediaPagination()
	const [search, setSearch] = useMediaSearch()

	const handleChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			setSearch(event.currentTarget.value)
			set(1)
		},
		[set, setSearch]
	)

	return (
		<Input
			{...props}
			defaultValue={search}
			onChange={handleChange}
		/>
	)
}

export { MediaSearchInput }
