'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ThemeProviderProps as NextThemesProviderProps } from 'next-themes/dist/types'

enum Theme {
	Dark = 'dark',
	Light = 'light',
}

type ThemeProviderProps = Omit<NextThemesProviderProps, 'themes' | 'forcedTheme' | 'defaultTheme'> & {
	forcedTheme?: Theme
	defaultTheme?: Theme
}

const ThemeProvider = ({
	children,
	attribute = 'class',
	storageKey = 'theme',
	defaultTheme = Theme.Dark,
	...props
}: ThemeProviderProps) => (
	<NextThemesProvider
		{...props}
		attribute={attribute}
		defaultTheme={defaultTheme}
		themes={[Theme.Dark, Theme.Light]}
	>
		{children}
	</NextThemesProvider>
)

export { Theme, ThemeProvider }
export type { ThemeProviderProps }

export { useTheme } from 'next-themes'
