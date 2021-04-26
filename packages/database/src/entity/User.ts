import 'reflect-metadata';
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
    @PrimaryGeneratedColumn('uuid')
    public readonly id!: string;

    @Field()
    @Column({
        nullable: true,
    })
    public name!: string;

    @Field()
    @Column({
        unique: true,
    })
    public username!: string;

    @Field()
    @Directive('@lowercase')
    @Column({
        nullable: true,
        unique: true,
    })
    public email!: string;

    @Column()
    public password!: string;

    @Field()
    @CreateDateColumn({
        nullable: true,
    })
    public createdAt!: Date;

    @Field(() => Date)
    @UpdateDateColumn({
        nullable: true,
    })
    public lastUpdated!: Date;

    @Field(() => Int)
    @Column('int', {
        default: 0,
        nullable: true,
    })
    public tokenVersion!: number;

    @Column({
        nullable: true,
    })
    public resetPasswordToken!: string;
}
