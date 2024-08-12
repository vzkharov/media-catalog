import { cn } from '~/lib/utils'
import type { ReactChildren, StyleProps } from '~/lib/types'

type MediaLinkProps = StyleProps & {
	href?: string
	children?: ReactChildren
}

const MediaLink = ({ href, style, children, className }: MediaLinkProps) => (
	<a
		target="_blank"
		href={href}
		style={style}
		className={cn(
			'line-clamp-1',
			children && href ? 'hover:underline focus:underline cursor-pointer' : 'cursor-text',
			className
		)}
	>
		{children || 'Unknown'}
	</a>
)

export { MediaLink }
export type { MediaLinkProps }
