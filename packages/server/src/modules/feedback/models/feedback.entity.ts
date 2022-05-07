import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/models/user.entity';

@Entity('feedback')
export class Feedback {
    @PrimaryGeneratedColumn()
    public readonly id: string;

    @Column('varchar', { length: 64 })
    public purpose: string;

    @Column('text')
    public details: string;

    @Column('smallint', { nullable: true })
    public rating?: number;

    @Column('smallint', { nullable: true })
    public maxRating?: number;

    @ManyToOne(() => User, { nullable: true })
    public user?: User;

    @CreateDateColumn()
    public createdAt: Date;
}
