'use client'

import { useQueryState } from '~/hooks/useQueryState'

const useMediaFilterType = (defaultValue: string = '') => useQueryState<string>('type', { defaultValue, debounce: 10 })

export { useMediaFilterType }
