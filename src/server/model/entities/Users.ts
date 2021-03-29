import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column("text")
    name!: string;

    @Column("text")
    username!: string;

    @Column("text")
    password!: string;

    @Column("date", {
        nullable: true,
    })
    createdAt!: Date;

}
