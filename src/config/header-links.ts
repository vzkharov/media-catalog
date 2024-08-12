import { MailIcon, GithubIcon, type LucideProps } from 'lucide-react'

import type { ReactChildren } from '~/lib/types'

type HeaderLink = {
	id: string
	href: string
	title: string
	Icon: (props: LucideProps) => ReactChildren
}

const headerLinksConfig = {
	github: {
		id: 'github',
		/** @fix */
		href: 'https://github.com/vzkharov/media-catalog/#README',
		title: 'github',
		Icon: GithubIcon,
	},
	mail: {
		id: 'mail',
		href: 'mailto:zakharovvadzim@gmail.com',
		title: 'mail',
		Icon: MailIcon,
	},
} satisfies Record<string, HeaderLink>

export { headerLinksConfig }
export type { HeaderLink }
