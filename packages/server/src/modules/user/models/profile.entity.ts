import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from 'typeorm';
import { User } from '../../../entities';
import type { IProfile } from '../interfaces/profile.interface';

@Entity('profiles')
@ObjectType({ description: 'Personal and shareable user info' })
export class Profile implements IProfile {
    @PrimaryGeneratedColumn('increment')
    @Field(() => ID)
    public readonly id: number;

    @OneToOne(() => User, { eager: true, onDelete: 'CASCADE' })
    @JoinColumn()
    @Field(() => User)
    public readonly user: User;

    @Column('varchar', { length: 64 })
    @Field()
    public displayName: string;

    @Column('boolean', { default: true })
    @Field(() => Boolean)
    public isPublic: boolean;

    @Column('text', { default: '' })
    @Field()
    public bio: string;

    @Column('date', { nullable: true })
    @Field({ nullable: true })
    public birthday?: Date;

    @Column('varchar', { nullable: true })
    @Field({ nullable: true })
    public picture?: string;
}
