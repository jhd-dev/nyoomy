import { Field, InputType } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class UpdatePasswordInput {
    @Field()
    @Length(1, 256)
    public username: string;

    @Field()
    @Length(1, 256)
    public oldPassword: string;

    @Field()
    @Length(8, 256)
    public newPassword: string;
}
