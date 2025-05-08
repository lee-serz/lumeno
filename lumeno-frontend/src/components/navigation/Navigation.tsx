'use client'

import { House, LayoutTemplate, Smile, UserRound } from 'lucide-react'

export function Navigation() {
	return (
		<div className="dock text-sm">
			<button className="dock-active">
				<House />
				<p>Главная</p>
			</button>

			<button className="">
				<Smile />
				<p>Настроение</p>
			</button>

			<button>
				<LayoutTemplate />
				<p>Привычки</p>
			</button>

			<button>
				<UserRound />
				<p>Профиль</p>
			</button>
		</div>
	)
}
