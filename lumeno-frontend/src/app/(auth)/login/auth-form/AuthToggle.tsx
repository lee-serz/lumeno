import { PUBLIC_PAGES } from '@/config/pages/public.config'
import { useRouter } from 'next/navigation'

export function AuthToggle({ isLogin }: { isLogin: boolean }) {
	const router = useRouter()

	return (
		<div className="text-center ">
			{isLogin ? (
				<div className="flex justify-center items-center text-xs font-normal gap-2">
					Нет аккаунта?
					<button
						type="button"
						className="btn btn-link text-xs font-normal p-0"
						onClick={() => router.push(PUBLIC_PAGES.REGISTER)}
					>
						Зарегистрироваться
					</button>
				</div>
			) : (
				<div className="flex justify-center items-center text-xs font-normal gap-2">
					Уже есть аккаунт?
					<button
						type="button"
						className="btn btn-link text-xs font-normal p-0"
						onClick={() => router.push(PUBLIC_PAGES.LOGIN)}
					>
						Войти
					</button>
				</div>
			)}
		</div>
	)
}
