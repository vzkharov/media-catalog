'use client'

import { memo } from 'react'

import { Button } from '~/components/ui/button'

const ErrorComponent = memo(() => (
	<div className="flex h-[50svh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
		<div className="mx-auto max-w-md text-center">
			<h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
				Oops, something went wrong!
			</h1>
			<p className="mt-4 text-muted-foreground">
				We&apos;re sorry, but there was an error while fetching media data. Please try again
				later.
			</p>
			<Button
				className="mt-6"
				onClick={() => window?.location.reload()}
			>
				Refresh
			</Button>
		</div>
	</div>
))

ErrorComponent.displayName = '@media-list/error'

export { ErrorComponent }
