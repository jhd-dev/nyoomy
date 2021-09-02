import 'reflect-metadata';
import { InterfaceType, Field } from 'type-graphql';
import { Column, ManyToOne } from 'typeorm';
import { User } from '../../entities/User';

@InterfaceType()
export class Metric {
    @ManyToOne(() => User)
    @Field(() => User)
    public user: User;

    @Column('varchar', { length: 32, default: '' })
    @Field()
    public title: string;

    @Column('varchar', { length: 256, default: '' })
    @Field()
    public description: string;

    @Column('boolean', { default: false })
    @Field()
    public isArchived: boolean;
}
