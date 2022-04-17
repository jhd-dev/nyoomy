import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
    Column,
    JoinTable,
    ManyToMany,
    ManyToOne,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';
import CategoryIcon, {
    categoryIcons,
} from '../../../types/enums/category-icon';
import { User } from '../../user/models/user.entity';
import { Taggable } from './taggable.entity';

@Entity('tags')
@ObjectType()
export class Tag {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    public readonly id: number;

    @ManyToOne(() => User)
    @Field(() => User)
    public user: User;

    @ManyToMany(() => Taggable, (taggable) => taggable.tags)
    @JoinTable()
    @Field(() => [Taggable])
    public taggedItems: Taggable[];

    @Column('varchar', { length: 63 })
    @Field()
    public label: string;

    @Column('enum', {
        enum: categoryIcons,
        nullable: true,
    })
    @Field(() => CategoryIcon, { nullable: true })
    public icon: CategoryIcon | null;
}
