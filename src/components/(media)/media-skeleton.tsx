import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { Card } from '~/components/ui/card'
import { Skeleton } from '~/components/ui/skeleton'

import styles from './styles.module.css'

const MediaSkeleton = ({ style, className }: StyleProps) => (
	<Card
		style={style}
		className={cn(styles.card, className)}
	>
		<div className={styles.card__header}>
			<Skeleton className="h-4 w-1/4 rounded-full my-1" />
			<Skeleton className="h-4 w-1/6 rounded-full my-1" />
		</div>

		<div className={styles.card__body}>
			<Skeleton className={styles.card__thumbnail} />

			<div className="flex-1 flex flex-col justify-around gap-y-2">
				<Skeleton className="w-2/3 h-4" />
				<Skeleton className="w-1/3 h-4" />
			</div>
		</div>

		<div className={styles.card__footer}>
			<div className="h-10 flex flex-col justify-around">
				<Skeleton className="h-3 w-1/2" />
				<Skeleton className="h-3 w-3/4" />
			</div>
			<div className="h-10 flex flex-col gap-y-2">
				<Skeleton className="h-3 w-1/2" />
				<Skeleton className="h-3 w-3/4" />
			</div>
		</div>
	</Card>
)

export { MediaSkeleton }
