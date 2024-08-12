const formatDate = (dateString: string | Date, opts: Intl.DateTimeFormatOptions = {}): string => {
	const date = new Date(dateString)

	const options: Intl.DateTimeFormatOptions = {
		...defaultDateOpts,
		...opts,
	}

	return date.toLocaleDateString('en-US', options)
}

const formatTime = (ms: number): string => {
	const seconds = Math.floor((ms / 1000) % 60)

	const minutes = Math.floor((ms / 1000 / 60) % 60)

	const hours = Math.floor((ms / 1000 / 60 / 60) % 24)

	const formattedTime = [hours, minutes, seconds]
		.filter(Boolean)
		.map((item) => item.toString().padStart(2, '0'))
		.join(':')

	return formattedTime
}

const defaultDateOpts = { year: 'numeric', day: 'numeric', month: 'long' } satisfies Intl.DateTimeFormatOptions

export { formatTime, formatDate }
