import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    @CreateDateColumn({
        nullable: true,
    })
    createdAt!: Date;

    @UpdateDateColumn({
        nullable: true,
    })
    lastUpdated!: Date;

}
