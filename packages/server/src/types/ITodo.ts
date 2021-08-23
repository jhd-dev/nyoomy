import 'reflect-metadata';
import { InterfaceType, Field, ID } from 'type-graphql';
import { User } from '../entities/User';

@InterfaceType()
export abstract class ITodo {
    @Field(() => ID)
    public readonly id: string;

    @Field(() => User)
    public user: User;

    @Field(() => String)
    public title: string;

    @Field(() => String)
    public description: string;
}
