import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoInstance } from '../../dto/todo-instance.dto';
import { TodoInstanceEntity } from '../../models/todo-instance.entity';

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
