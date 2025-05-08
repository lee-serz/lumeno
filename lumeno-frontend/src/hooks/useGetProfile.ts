import userService from '@/services/user.service'
import { useEffect } from 'react'

export function useGetProfile() {
	useEffect(() => {
		const fetchUser = async () => {
			try {
				const userData = await userService.fetchProfile()
				console.log(userData.data)
			} catch (error) {
				console.log('Не удалось получить данные профиля пользователя')
			}
		}

		fetchUser()
	}, [])
}
