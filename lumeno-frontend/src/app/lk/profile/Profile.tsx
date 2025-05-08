import { useProfileStore } from '@/stores/profile.store'
import { useEffect } from 'react'

export default function Profile() {
	const { user, loading, error, fetchProfile } = useProfileStore()

	useEffect(() => {
		fetchProfile()
	}, [fetchProfile])

	if (loading)
		return <span className="loading loading-spinner loading-xl"></span>
	if (error) return <div>Ошибка: {error} </div>

	return (
		<div className="">
			<p>id: {user?.id}</p>
			<p>name: {user?.name}</p>
			<p>email: {user?.email}</p>
			<p>avatarPath: {user?.avatarPath}</p>
			<p>rights: {user?.rights}</p>
			<p>token: {user?.token}</p>
		</div>
	)
}
