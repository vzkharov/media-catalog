'use client'

import { memo, useCallback } from 'react'
import { SunIcon, MoonIcon } from 'lucide-react'

import { Theme, useTheme } from '~/modules/theme-provider'

import { Button } from '~/components/ui/button'

const ThemeButton = memo(() => {
	const { theme, setTheme } = useTheme()
	const currentTheme = theme || Theme.Dark

	const toggleTheme = useCallback(() => {
		const newTheme = currentTheme === Theme.Light ? Theme.Dark : Theme.Light
		setTheme(newTheme)
	}, [currentTheme, setTheme])

	const hint = `Switch to ${currentTheme === Theme.Light ? Theme.Dark : Theme.Light} mode`

	return (
		<Button
			size="icon"
			variant="ghost"
			title={hint}
			aria-label={hint}
			onClick={toggleTheme}
		>
			<SunIcon className="h-5 w-5 invisible dark:visible" />
			<MoonIcon className="h-5 w-5 visible dark:invisible absolute" />
		</Button>
	)
})

ThemeButton.displayName = 'theme-button'

export { ThemeButton }
