import { UserRole } from '@/services/auth/auth.types'

export interface IAuthForm {
	email: string
	password: string
}

export interface IAllUsers {
	id: string
	name?: string
	email: string
	rights: UserRole[]
}

export interface IAllGroup {
	id: string
	name?: string
	description: string
	inviteLink: string
}

export interface IUser {
	id: number
	name?: string
	email: string
	avatarPath?: string
	rights: UserRole[]
	token: string
}

export interface IFormData extends Pick<IUser, 'email'> {
	password: string
}

export interface IAuthResponse {
	accessToken: string
	refreshToken: string
	user: IUser
}

export type TypeUserForm = Omit<IUser, 'id'> & { password?: string }
