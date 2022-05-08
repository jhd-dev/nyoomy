import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ManyToMany, PrimaryGeneratedColumn, Entity, JoinTable } from 'typeorm';
import { Tag } from './tag.entity';

@Entity('taggables')
@ObjectType()
export class Taggable {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    public readonly id: string;

    @ManyToMany(() => Tag)
    @JoinTable()
    @Field(() => [Tag])
    public tags: Tag[];
}
