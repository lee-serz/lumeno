import { Inter } from 'next/font/google'

import './globals.css'
import { Providers } from './Providers'

const inter = Inter({ subsets: ['cyrillic', 'latin'], weight: '400' })

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="ru">
			<body className={inter.className}>
				<Providers>
					<main className="flex h-full flex-col justify-between">
						{children}
					</main>
				</Providers>
			</body>
		</html>
	)
}
