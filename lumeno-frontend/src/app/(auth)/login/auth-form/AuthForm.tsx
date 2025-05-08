'use client'

import { LockKeyhole, Mail } from 'lucide-react'
import { AuthToggle } from './AuthToggle'
import { useAuthForm } from './useAuthForm'
import { ErrorMessage } from '@/errors/errorMessage'

interface AuthFormProps {
	isLogin: boolean
}

export function AuthForm({ isLogin }: AuthFormProps) {
	const { handleSubmit, isLoading, onSubmit, register, formState } =
		useAuthForm(isLogin)

	const passwordError = formState.errors['password']?.message
	const emailError = formState.errors['email']?.message

	return (
		<div className="min-h-screen flex flex-col justify-center">
			<div className="">
				<h2 className="text-2xl font-bold mb-2 text-zinc-800">
					Начни с Lumeno ✨
				</h2>
				<p className="text-neutral-600">
					Формируй полезные привычки с Lumeno — просто, быстро и бесплатно.
				</p>
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className="w-full">
				<fieldset className="fieldset w-full py-12 rounded-box">
					<p className="font-bold text-lg text-zinc-800">Почта</p>
					<label className="input bg-zinc-100 w-full">
						<Mail size={18} strokeWidth={2} />
						<input
							type="email"
							placeholder="Почта"
							{...register('email', {
								required: 'Обязательно для заполнения',
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: 'Неверный формат почты'
								}
							})}
							className="grow text-md"
						/>
					</label>
					<ErrorMessage message={emailError} />
					<p className="font-bold text-lg text-zinc-800">Пароль</p>
					<label className="input bg-zinc-100 w-full">
						<LockKeyhole size={18} strokeWidth={2} />
						<input
							type="password"
							placeholder="Пароль"
							{...register('password', {
								required: 'Обязательно для заполнения',
								minLength: {
									value: 6,
									message: 'Пароль не менее 6 символов'
								}
							})}
							className="grow"
						/>
					</label>
					<ErrorMessage message={passwordError} />
					<label className="label mb-6">
						<input type="checkbox" className="checkbox" />Я согласен(-на) с
						условиями
						<a href=""> соглашения</a>
					</label>
					<button
						type="submit"
						className="btn btn-soft rounded-full border-none py-6 text-zinc-800"
						disabled={isLoading}
					>
						{isLoading
							? 'Загрузка...'
							: isLogin
							? 'Войти'
							: 'Зарегистрироваться'}
					</button>
					<AuthToggle isLogin={isLogin} />
				</fieldset>
			</form>
		</div>
	)
}
