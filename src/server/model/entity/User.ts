import { Field, ObjectType, ID, Directive, Int } from 'type-graphql';
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    readonly id!: string;

    @Field()
    @Column({
        nullable: true,
    })
    name!: string;

    @Field()
    @Column({
        unique: true,
    })
    username!: string;

    @Field()
    @Directive('@lowercase')
    @Column({
        nullable: true,
        unique: true,
    })
    email!: string;

    @Column()
    password!: string;

    @Field()
    @CreateDateColumn({
        nullable: true,
    })
    createdAt!: Date;

    @Field(() => Date)
    @UpdateDateColumn({
        nullable: true,
    })
    lastUpdated!: Date;

    @Field(() => Int)
    @Column('int', {
        default: 0,
        nullable: true,
    })
    tokenVersion!: number;
}
