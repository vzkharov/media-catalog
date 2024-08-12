import { memo } from 'react'
import { ImagesIcon } from 'lucide-react'

const EmptyComponent = memo(() => (
	<div className="flex items-center justify-center h-[50svh]">
		<div className="space-y-4 text-center">
			<ImagesIcon className="mx-auto h-12 w-12" />
			<h3 className="text-2xl font-semibold">No media yet</h3>
			<p className="text-muted-foreground">
				It looks like you there are not media with this query. Why don&apos;t you
				<br className="hidden sm:block" />
				change query string or refresh page?
			</p>
		</div>
	</div>
))

EmptyComponent.displayName = '@media-list/empty'

export { EmptyComponent }
