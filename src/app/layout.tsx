import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import type { Layout } from '~/lib/types'

import { Header } from '~/components/header'

import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

const RootLayout: Layout = ({ children }) => (
	<html
		lang="en"
		suppressHydrationWarning
		suppressContentEditableWarning
	>
		<body className={inter.className}>
			<Providers>
				<Header />
				<main>{children}</main>
			</Providers>
		</body>
	</html>
)

const metadata: Metadata = {
	title: 'mediacatalog.',
	description: 'The sandbox of iTunes API',
}

export { metadata }
export default RootLayout
