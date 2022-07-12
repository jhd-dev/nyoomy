import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { parseExpression as parseCronExpression } from 'cron-parser';
import { Between, Repository } from 'typeorm';
import { conditionalSpread } from '../../../../utils/conditionalSpread';
import { AfterDate, BeforeDate } from '../../../../utils/typeorm-operators';
import { TodoInstance } from '../../dto/todo-instance.dto';
import { TodoInstanceEntity } from '../../models/todo-instance.entity';
import type { User } from '../../../user/models/user.entity';
import type { AddTodoInstanceInput } from '../../dto/add-todo-instance.input';
import type { FindTodoInstancesArgs } from '../../dto/find-todo-instances.args';

@Injectable()
export class TodoInstanceService {
    public constructor(
        @InjectRepository(TodoInstanceEntity)
        private readonly todoInstanceRepo: Repository<TodoInstanceEntity>
    ) {}

    public async getById(id: string): Promise<TodoInstance> {
        const entity = await this.todoInstanceRepo.findOneOrFail({
            where: { id },
        });
        return this.entityToDto(entity);
    }

    public async getByTodoId(todoId: string): Promise<TodoInstance[]> {
        const entities = await this.todoInstanceRepo.find({
            where: { todoId },
        });
        return this.entitiesToDtos(entities);
    }

    public async findByUser(
        user: User,
        input: FindTodoInstancesArgs
    ): Promise<TodoInstance[]> {
        const dueDateFilterOps: { dueDate?: any } = {};

        if (input.fromDate && input.untilDate) {
            dueDateFilterOps.dueDate = Between(input.fromDate, input.untilDate);
        } else if (input.fromDate) {
            dueDateFilterOps.dueDate = AfterDate(input.fromDate);
        } else if (input.untilDate) {
            dueDateFilterOps.dueDate = BeforeDate(input.untilDate);
        }

        const instances = await this.todoInstanceRepo.find({
            where: {
                todo: { userId: user.id },
                ...dueDateFilterOps,
            },
            relations: ['todo'],
            order: { dueDate: { direction: 'ASC', nulls: 'FIRST' } },
        });

        return this.entitiesToDtos(instances);
    }

    public async populateInstances(
        firstInstanceId: string,
        untilDate: Date,
        maxInstances: number
    ): Promise<TodoInstance[]> {
        const firstInstance = await this.todoInstanceRepo.findOne({
            where: { id: firstInstanceId },
            relations: { todo: true },
        });
        const cronString = firstInstance?.todo.repeatPattern;
        if (!cronString || !firstInstance) {
            return [];
        }
        const instances: TodoInstance[] = [];
        try {
            const interval = parseCronExpression(cronString, {
                currentDate: firstInstance.dueDate,
                endDate: untilDate,
                iterator: true,
            });
            for (let i = 0; i < maxInstances; i++) {
                const { value, done } = interval.next();

                // eslint-disable-next-line no-await-in-loop
                const instance = await this.addInstance({
                    todoId: firstInstance.todoId,
                    dueDate: value.toDate(),
                });
                instances.push(instance);

                if (done) {
                    break;
                }
            }
        } catch (err: unknown) {
            console.error(err);
        }
        return instances;
    }

    public async addInstance(
        input: AddTodoInstanceInput
    ): Promise<TodoInstance> {
        const entity = this.todoInstanceRepo.create({
            todoId: input.todoId,
            ...conditionalSpread(input, 'dueDate'),
        });
        const saved = await this.todoInstanceRepo.save(entity);
        return this.entityToDto(saved);
    }

    private entityToDto(entity: TodoInstanceEntity): TodoInstance {
        const dto = new TodoInstance();
        dto.id = entity.id;
        dto.dueDate = entity.dueDate;
        dto.offsetDueDate = entity.offsetDueDate;
        dto.isCompleted = entity.isCompleted;
        dto.todoId = entity.todoId;
        return dto;
    }

    private entitiesToDtos(entities: TodoInstanceEntity[]): TodoInstance[] {
        return entities.map((entity) => this.entityToDto(entity));
    }
}
