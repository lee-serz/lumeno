import { create } from 'zustand'
import userService from '@/services/user.service'
import { IUserState } from '@/types/userState.types'

export const useProfileStore = create<IUserState>(set => ({
	user: null,
	loading: false,
	error: null,

	fetchProfile: async () => {
		set({ loading: true, error: null })
		try {
			const response = await userService.fetchProfile()
			set({ user: response.data, loading: false })
		} catch (error) {
			set({
				error:
					error instanceof Error
						? error.message
						: 'Не удалось получить данные профиля пользователя',
				loading: false
			})
		}
	},

	reset: () => set({ user: null, error: null })
}))
