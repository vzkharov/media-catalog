import { fetchMediaSearch } from '~/fetchers/(media)'

import { MediaCard } from '~/components/(media)/media-card'

import { EmptyComponent } from './empty'

import styles from './styles.module.css'

type ComponentProps = {
	q?: string
	type?: string

	page?: number
	limit?: number
}

const Component = async ({ q, type, page, limit }: ComponentProps) => {
	const data = await fetchMediaSearch({ q, type, page, limit })

	if (!data.length) {
		return <EmptyComponent />
	}

	return (
		<section className={styles.list}>
			{data.map((media) => (
				<MediaCard
					key={media.url}
					data={media}
				/>
			))}
		</section>
	)
}

export { Component }
export type { ComponentProps }
