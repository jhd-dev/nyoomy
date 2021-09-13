import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
    Column,
    JoinTable,
    ManyToMany,
    ManyToOne,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';
import CategoryIcon, { categoryIcons } from '../types/enums/CategoryIcon';
import { Taggable } from './taggable.entity';
import { User } from './user.entity';

@Entity('tags')
@ObjectType()
export class Tag {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public readonly id: string;

    @ManyToOne(() => User)
    @Field(() => User)
    public user: User;

    @ManyToMany(() => Taggable)
    @JoinTable()
    @Field(() => [Taggable])
    public taggedItems: Taggable[];

    @Column('varchar', { length: 63 })
    @Field()
    public title: string;

    @Column('enum', {
        enum: categoryIcons,
        nullable: true,
    })
    @Field(() => CategoryIcon, { nullable: true })
    public icon: CategoryIcon | null;
}
