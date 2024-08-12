'use client'

import { useMediaFilterState } from '~/features/(media)/use-media-filter-state'

import { Input, type InputProps } from '~/components/ui/input'

const MediaSearchInput = (props: InputProps) => {
	const [state, setState] = useMediaFilterState(400)

	return (
		<Input
			{...props}
			defaultValue={state.q}
			onChange={(e) => setState({ page: 1, q: e.currentTarget.value })}
		/>
	)
}

export { MediaSearchInput }
