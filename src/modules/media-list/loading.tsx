import { memo } from 'react'

import { MediaSkeleton } from '~/components/(media)/media-skeleton'

import styles from './styles.module.css'

const LoadingComponent = memo(() => (
	<section className={styles.list}>
		{new Array(9).fill(0).map((_, idx) => (
			<MediaSkeleton key={idx} />
		))}
	</section>
))

LoadingComponent.displayName = '@media-list/loading'

export { LoadingComponent }
