import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import type { IUserSettings } from '../interfaces/user-settings.interface';

@Entity('user_settings')
@ObjectType("Users' settings and preferences")
export class UserSettings implements IUserSettings {
    @PrimaryGeneratedColumn('increment')
    @Field(() => ID)
    public readonly id: number;

    @Column('varchar', { default: 'en_US', length: 35 })
    @Field()
    public language: string;

    @Column('varchar', { length: 4, nullable: true })
    @Field({ nullable: true })
    public pin?: string;

    @Column('smallint', { nullable: true })
    @Field(() => Int, { nullable: true })
    public pinTimeout?: number;
}
