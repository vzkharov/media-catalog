'use client'

import { useQueryState } from '~/hooks/useQueryState'

const useMediaSearch = (defaultValue: string = '') => useQueryState<string>('q', { defaultValue, debounce: 200 })

export { useMediaSearch }
