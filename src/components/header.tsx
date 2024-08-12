import { memo } from 'react'

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { headerLinksConfig } from '~/config/header-links'

import { Logo } from './logo'
import { ThemeButton } from './theme-button'

const Header = memo<StyleProps>(({ style, className }) => (
	<header
		style={style}
		className={cn(
			'sticky top-0 z-50 w-full h-16 flex items-center justify-between bg-background',
			className
		)}
	>
		<a
			href="/"
			className="flex items-center gap-2"
		>
			<Logo />
			<span className="text-lg font-medium">mediacatalog.</span>
		</a>
		<div className="flex items-center gap-4">
			{[headerLinksConfig.github, headerLinksConfig.mail].map(({ id, href, title, Icon }) => (
				<a
					key={id}
					href={href}
					title={title}
					aria-label={title}
					className="text-muted-foreground hover:text-foreground"
				>
					<Icon className="h-5 w-5" />
				</a>
			))}

			<ThemeButton />
		</div>
	</header>
))

Header.displayName = 'header'

export { Header }
