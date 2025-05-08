import { IUser } from './auth.types'

export interface IUserState {
	user: IUser | null
	loading: boolean
	error: string | null
	fetchProfile: () => Promise<void>
	reset: () => void
}
