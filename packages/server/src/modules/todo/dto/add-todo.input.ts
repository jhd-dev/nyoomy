import { InputType, OmitType } from '@nestjs/graphql';
import { UpdateTodoInput } from './update-todo.input';

@InputType()
export class AddTodoInput extends OmitType(UpdateTodoInput, [
    'id',
    'tagUpdates',
] as const) {}
