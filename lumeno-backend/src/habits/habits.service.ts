import { PrismaService } from '@/prisma.service'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { HabitsDto } from './dto/habits.dto'
import { Habit } from '@prisma/client'

@Injectable()
export class HabitsService {
	constructor(private prisma: PrismaService) {}

	async getHabbits() {
		return this.prisma.habit.findMany({
			select: {
				name: true,
				description: true,
				icon: true,
				color: true,
				targetCount: true
			}
		})
	}

	async deleteHabitById(habitId: number): Promise<{ message: string }> {
		try {
			await this.prisma.habit.delete({
				where: {
					id: habitId
				}
			})
			return { message: 'Запись удалена' }
		} catch (error) {
			throw new HttpException(
				'Не получилось удалить запись',
				HttpStatus.BAD_REQUEST
			)
		}
	}

	getById(id: number) {
		return this.prisma.habit.findUnique({
			where: {
				id
			}
		})
	}

	async create(dto: HabitsDto, userId: string) {
		return this.prisma.habit.create({
			data: {
				name: dto.name,
				description: dto.description,
				icon: dto.icon,
				color: dto.color,
				targetCount: dto.targetCount,
				createdAt: new Date(),
				updatedAt: new Date(),
				user: {
					connect: { id: userId }
				}
			}
		})
	}

	async update(id: number, dto: Partial<Habit>) {
		let data = dto

		return this.prisma.habit.update({
			where: {
				id
			},
			data,
			select: {
				name: true,
				description: true,
				icon: true,
				color: true,
				targetCount: true
			}
		})
	}
}
