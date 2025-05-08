// hooks/useLogout.ts
'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import toast from 'react-hot-toast'

import { PUBLIC_PAGES } from '@/config/pages/public.config'
import authService from '@/services/auth/auth.service'

export function useLogout() {
	const router = useRouter()
	const queryClient = useQueryClient()
	const [isPending, startTransition] = useTransition()

	const { mutate: logout, isPending: isLogoutPending } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess() {
			startTransition(() => {
				router.push(PUBLIC_PAGES.LOGIN)
			})
			queryClient.removeQueries({ queryKey: ['new tokens'], exact: true })
			queryClient.removeQueries({ queryKey: ['profile'], exact: true })
		},
		onError() {
			toast.error('При выходе произошла ошибка')
		}
	})

	return {
		logout,
		isLoading: isLogoutPending || isPending
	}
}
