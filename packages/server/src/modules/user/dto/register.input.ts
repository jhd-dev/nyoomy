import 'reflect-metadata';
import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, Length } from 'class-validator';

@InputType({ description: 'User registration data' })
export class RegisterUserInput {
    @Field()
    @Length(1, 256)
    public displayName: string;

    @Field()
    @IsEmail()
    public email: string;

    @Field()
    @Length(1, 256)
    public username: string;

    @Field()
    @Length(8, 256)
    public password: string;
}
