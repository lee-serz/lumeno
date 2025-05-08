'use client'
import { useLogout } from '@/hooks/useLogout'
import { EllipsisVertical } from 'lucide-react'
import Image from 'next/image'

export function Header() {
	const { logout, isLoading } = useLogout()

	return (
		<div className="navbar flex justify-between items-center p-0 ">
			<Image src={'/logo.png'} width={32} height={32} alt="logo" />
			<p>Главная</p>
			<div className="flex items-stretch">
				<div className="dropdown dropdown-end">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost rounded-field p-0"
					>
						<EllipsisVertical />
					</div>
					<ul
						tabIndex={0}
						className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm"
					>
						<li>
							<a>Настройки</a>
						</li>
						<li>
							<a>Выход</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
