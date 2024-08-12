const formatPrice = (price: number, currency: string = 'USD'): string => {
	const formatter = new Intl.NumberFormat('en-US', {
		currency,
		style: 'currency',

		//minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
		//maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
	})

	return formatter.format(price)
}

export { formatPrice }
