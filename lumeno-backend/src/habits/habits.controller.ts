import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { HabitsService } from './habits.service'
import { Auth } from '@/auth/decorators/auth.decorator'
import { Habit, Role } from '@prisma/client'
import { CurrentUser } from '@/auth/decorators/user.decorator'
import { HabitsDto } from './dto/habits.dto'

@Controller('habits')
export class HabitsController {
	constructor(private readonly habitService: HabitsService) {}

	// Получить все
	@Auth()
	@Get('all')
	async getHabits() {
		return this.habitService.getHabbits()
	}

	// Получить по ID
	@Auth()
	@Get(':habitId')
	async getHabitsById(@Param('habitId') habitId: number) {
		return this.habitService.getById(habitId)
	}

	// Удалить
	@Auth([Role.ADMIN])
	@Delete(':habitId')
	async deleteHabit(
		@Param('habitId') habitId: number
	): Promise<{ message: string }> {
		return this.habitService.deleteHabitById(habitId)
	}

	// Обновить
	@Auth()
	@Put('update/:habitId')
	async updateHabit(@Param('habitId') habitId: number, @Body() dto: Habit) {
		return this.habitService.update(habitId, dto)
	}

	@Post()
	@Auth()
	async create(@Body() dto: HabitsDto, @CurrentUser('id') userId: string) {
		return this.habitService.create(dto, userId)
	}
}
