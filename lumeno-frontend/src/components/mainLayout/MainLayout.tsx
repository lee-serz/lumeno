import type { PropsWithChildren } from 'react'

import { Header } from '../header/Header'
import { Navigation } from '../navigation/Navigation'

export default function MainLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className="container">
			<Header />
			<div className="grow">{children}</div>
			<Navigation />
		</div>
	)
}
