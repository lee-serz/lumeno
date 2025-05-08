import {
	IsEmail,
	IsInt,
	IsNotEmpty,
	IsNumber,
	isString,
	IsString,
	Min,
	MinLength
} from 'class-validator'

export class HabitsDto {
	@IsString()
	@IsNotEmpty()
	@MinLength(2, { message: 'Name must be at least 2 characters long' })
	name: string

	@IsString()
	@IsNotEmpty()
	@MinLength(10, { message: 'Description must be at least 10 characters long' })
	description: string

	@IsString()
	@IsNotEmpty()
	icon: string

	@IsString()
	@IsNotEmpty()
	color: string

	@IsNumber()
	@IsInt()
	@Min(1, { message: 'Target count must be at least 1' })
	targetCount: number
}
