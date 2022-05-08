import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import ThemePreference, {
    themePreferences,
} from '../../../types/enums/theme-preference.enum';
import { User } from './user.entity';
import type { IUserSettings } from '../interfaces/user-settings.interface';

@Entity('user_settings')
@ObjectType("Users' settings and preferences")
export class UserSettings implements IUserSettings {
    @PrimaryGeneratedColumn('increment')
    @Field(() => ID)
    public readonly id: string;

    @OneToOne(() => User, { eager: true, cascade: true, onDelete: 'CASCADE' })
    @JoinColumn()
    @Field(() => User)
    public readonly user!: User;

    @Column('varchar', { default: 'en_US', length: 35 })
    @Field()
    public language!: string;

    @Column('enum', { enum: themePreferences, default: ThemePreference.DEVICE })
    @Field(() => ThemePreference)
    public themePreference!: ThemePreference;

    @Column('varchar', { length: 4, nullable: true })
    @Field({ nullable: true })
    public pin?: string;

    @Column('smallint', { nullable: true })
    @Field(() => Int, { nullable: true })
    public pinTimeout?: number;

    @Column('boolean', { default: true })
    @Field()
    public isPublic!: boolean;
}
