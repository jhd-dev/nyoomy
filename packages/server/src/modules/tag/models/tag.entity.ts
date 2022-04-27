import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';
import {
    Column,
    ManyToMany,
    ManyToOne,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';
import {
    CategoryColor,
    categoryColors,
} from '../../../types/enums/category-color.enum';
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

    @ManyToMany(() => Taggable, (taggable) => taggable.tags, { cascade: true })
    @HideField()
    public taggedItems: Taggable[];

    @Column('varchar', { length: 63 })
    @Field()
    public label: string;

    @Column('text', { default: '' })
    @Field()
    public description: string;

    @Column('enum', {
        enum: categoryColors,
        nullable: true,
    })
    @Field(() => CategoryColor, { defaultValue: CategoryColor.DEFAULT })
    public color: CategoryColor;

    @Column('enum', {
        enum: categoryIcons,
        nullable: true,
    })
    @Field(() => CategoryIcon, { nullable: true })
    public icon: CategoryIcon | null;

    @Column('boolean', { default: false })
    @Field()
    public isArchived: boolean;
}
