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
import { categoryIcons } from '../../../types/enums/category-icon';
import { User } from '../../user/models/user.entity';
import { TaggableEntity } from './taggable.entity';
import type CategoryIcon from '../../../types/enums/category-icon';

@Entity('tags')
export class TagEntity {
    @PrimaryGeneratedColumn()
    public readonly id!: string;

    @ManyToOne(() => User)
    public user: User;

    @ManyToMany(() => TaggableEntity, (taggable) => taggable.tags, {
        cascade: true,
    })
    public taggedItems: TaggableEntity[];

    @Column('varchar', { length: 63 })
    public label: string;

    @Column('text', { default: '' })
    public description: string;

    @Column('enum', { default: CategoryColor.DEFAULT, enum: categoryColors })
    public color: CategoryColor;

    @Column('enum', { enum: categoryIcons, nullable: true })
    public icon: CategoryIcon | null;

    @Column('boolean', { default: false, name: 'is_archived' })
    public isArchived: boolean;
}
