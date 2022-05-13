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
export class UserSettings implements IUserSettings {
    @PrimaryGeneratedColumn()
    public readonly id: string;

    @OneToOne(() => User, { eager: true, cascade: true, onDelete: 'CASCADE' })
    @JoinColumn()
    public readonly user!: User;

    @Column('varchar', { default: 'en_US', length: 35 })
    public language!: string;

    @Column('enum', { enum: themePreferences, default: ThemePreference.DEVICE })
    public themePreference!: ThemePreference;

    @Column('bool', { default: true })
    public audioEnabled: boolean;

    @Column('smallint', { default: 100 })
    public globalVolume: number;

    @Column('varchar', { length: 4, nullable: true })
    public pin?: string;

    @Column('smallint', { nullable: true })
    public pinTimeout?: number;

    @Column('bool', { default: true })
    public isPublic!: boolean;
}
