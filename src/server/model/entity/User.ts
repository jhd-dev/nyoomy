import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column({
        nullable: true,
    })
    name!: string;

    @Field()
    @Column()
    username!: string;

    @Field()
    @Column({
        nullable: true,
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

    @Column("int", {
        default: 0,
        nullable: true,
    })
    tokenVersion!: number;

}
