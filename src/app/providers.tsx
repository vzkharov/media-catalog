'use client'

import type { Provider } from '~/lib/types'

import { ThemeProvider, type ThemeProviderProps } from '~/modules/theme-provider'

type Props = {
	defaultTheme?: ThemeProviderProps['defaultTheme']
}

const Providers: Provider<Props> = ({ children, defaultTheme }) => (
	<ThemeProvider defaultTheme={defaultTheme}>{children}</ThemeProvider>
)

export { Providers }
