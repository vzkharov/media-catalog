import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { formatDate, formatTime } from '~/utils/date'

import type { Media } from '~/entities/media'
import { mediaTypeConfig } from '~/config/media-type'

import { Card } from '~/components/ui/card'
import { Badge } from '~/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'

import { MediaLink } from './media-link'

import styles from './styles.module.css'

type MediaCardProps = StyleProps & {
	data: Media
}

const MediaCard = ({ data, style, className }: MediaCardProps) => {
	const additionalInfo = [
		{
			label: 'Release Date',
			text: formatDate(data.releaseDate),
		},
		{
			label: 'Genre',
			text: data.genre,
		},
	] as const

	return (
		<Card
			style={style}
			className={cn(styles.card, className)}
		>
			<div className={styles.card__header}>
				<Badge>{mediaTypeConfig[data.kind]?.title || 'unknown'}</Badge>
				<Badge
					variant="secondary"
					className="leading-snug"
				>
					{formatTime(data.duration)}
				</Badge>
			</div>
			<div className={styles.card__body}>
				<Avatar className={styles.card__thumbnail}>
					<AvatarImage
						width={100}
						height={100}
						alt={data.name}
						src={data.thumbnailUrl}
					/>
					<AvatarFallback className={styles.card__thumbnail} />
				</Avatar>
				<div>
					<MediaLink
						href={data.url}
						className="text-xl font-bold"
					>
						{data.name}
					</MediaLink>
					<MediaLink
						href={data.artistUrl}
						className="text-sm text-muted-foreground"
					>
						{data.artist}
					</MediaLink>
				</div>
			</div>

			<div className={styles.card__footer}>
				{additionalInfo
					.filter((item) => !!item.text)
					.map((item) => (
						<div key={item.label}>
							<div className="font-medium select-none">{item.label}</div>
							<div className="line-clamp-1">{item.text}</div>
						</div>
					))}
			</div>
		</Card>
	)
}

export { MediaCard }
export type { MediaCardProps }
