import { InputType, OmitType } from '@nestjs/graphql';
import { UpdateTodoInput } from './update-todo.input';

@InputType()
export class AddTodoInput extends OmitType(UpdateTodoInput, [
    'id',
    'date',
    'isCompleted',
] as const) {}
