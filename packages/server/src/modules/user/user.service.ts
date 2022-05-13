import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import EntityAction from '../../types/enums/entity-action.enum';
import { CaslAbilityFactory } from '../casl/casl-ability.factory';
import { EmailService } from '../email/email.service';
import { Profile } from './models/profile.entity';
import { UserSettings } from './models/user-settings.entity';
import { User } from './models/user.entity';
import { UserRepo } from './user.repository';
import type { RegisterUserInput } from '../auth/dto/register.input';
import type { UpdateUserSettingsInput } from './dto/update-user-settings.input';
import type { UserSettingsDto } from './dto/user-settings.dto';
import type { IUser } from './interfaces/user.interface';

@Injectable()
export class UserService {
    public constructor(
        @InjectRepository(User)
        private readonly userRepo: UserRepo,
        @InjectRepository(UserSettings)
        private readonly userSettingsRepo: Repository<UserSettings>,
        @InjectRepository(Profile)
        private readonly profileRepo: Repository<Profile>,
        private readonly configService: ConfigService,
        private readonly caslAbilityFactory: CaslAbilityFactory,
        private readonly emailService: EmailService
    ) {}

    // eslint-disable-next-line require-await
    public async getAll(user: User): Promise<User[]> {
        const ability = this.caslAbilityFactory.createForUser(user);
        if (ability.can(EntityAction.READ, User)) {
            return await this.userRepo.find();
        }
        return [user];
    }

    public async getCurrentUser(id: unknown): Promise<IUser | null> {
        if (typeof id !== 'string' || id.length === 0) return null;
        return (await this.findById(id)) ?? null;
    }

    public findById(
        id: string,
        isOptional: boolean = true
    ): Promise<IUser | undefined> {
        return isOptional
            ? this.userRepo.findOne(id)
            : this.userRepo.findOneOrFail(id);
    }

    public findByCredentials(
        usernameOrEmail: string
    ): Promise<User | undefined> {
        return this.userRepo.findOne({
            where: usernameOrEmail.includes('@')
                ? { email: usernameOrEmail }
                : { username: usernameOrEmail },
        });
    }

    public findByGoogleId(googleId: string): Promise<User | undefined> {
        return this.userRepo.findOne({ where: { googleId } });
    }

    public async createUser({
        displayName,
        email,
        username,
        password,
    }: RegisterUserInput): Promise<User> {
        const user = this.userRepo.create({ username, email, password });
        const profile = this.profileRepo.create({ user, displayName });
        const savedProfile = await this.profileRepo.save(profile);
        const settings = this.userSettingsRepo.create({
            user: savedProfile.user,
        });
        await this.userSettingsRepo.save(settings);

        return this.userRepo.findOneOrFail(user.id);
    }

    public async createGoogleUser(
        googleId: string,
        emails: string[],
        displayName: string
    ): Promise<User> {
        const username = displayName
            .toLocaleLowerCase()
            .padEnd(10, String(Math.random()).substring(2));
        const password = '';
        const user: User = this.userRepo.create({
            username,
            email: emails[0],
            password,
            googleId,
        });
        const profile = this.profileRepo.create({ user, displayName });
        const savedProfile = await this.profileRepo.save(profile);
        const settings = this.userSettingsRepo.create({
            user: savedProfile.user,
        });
        await this.userSettingsRepo.save(settings);

        return this.userRepo.findOneOrFail(user.id);
    }

    public async updatePassword(
        username: string,
        oldPassword: string,
        newPassword: string
    ): Promise<void> {
        const user: User | undefined = await this.userRepo.findOne({
            username,
        });
        if (user === undefined) throw new Error('User does not exist.');

        const actualPassword: string = user.password;
        if (oldPassword !== actualPassword)
            throw new Error('Incorrect password.');

        await this.userRepo.update({ username }, { password: newPassword });
    }

    public async sendForgotPasswordEmail(email: string): Promise<void> {
        const user = await this.userRepo.findOne({ where: { email } });
        if (user === undefined) {
            throw new Error('No user with given email address found.');
        }

        const token: string = '';
        await this.emailService.sendEmail(
            email,
            'Forgot password',
            `<a href="${
                this.configService.get<string>('CLIENT.PUBLIC_URL') ?? ''
            }/reset-password/${token}">
                Click here to reset your password.
            </a>`
        );
    }

    public async resetPassword(email: string): Promise<void> {
        await this.userRepo.findOneOrFail({
            where: { email },
        });
    }

    public async deleteById(userId: string): Promise<void> {
        const user = await this.userRepo.findOneOrFail(userId);
        await this.userRepo.delete(user);
    }

    public async getUserSettings(user: User): Promise<UserSettingsDto> {
        const settings = await this.userSettingsRepo.findOneOrFail(
            { user: { id: user.id } },
            { relations: ['user'] }
        );
        return { ...settings, user: { ...settings.user, password: undefined } };
    }

    public async updateUserSettings(
        user: User,
        updateInput: UpdateUserSettingsInput
    ): Promise<UserSettingsDto> {
        const settings = await this.userSettingsRepo.findOneOrFail(
            { user: { id: user.id } },
            { relations: ['user'] }
        );
        settings.language = updateInput.language ?? settings.language;
        settings.themePreference =
            updateInput.themePreference ?? settings.themePreference;
        settings.pin = updateInput.pin ?? settings.pin;
        settings.pinTimeout = updateInput.pinTimeout ?? settings.pinTimeout;
        await this.userSettingsRepo.save(settings);
        return this.getUserSettings(user);
    }

    // private async validateRegistration({
    //     email,
    //     username,
    // }: RegisterUserInput): Promise<RegistrationProblem | null> {
    //     const existingUsers = await this.userRepo.find({
    //         where: [{ username }, { email }],
    //     });
    //     if (existingUsers.length > 0) {
    //         return existingUsers[0].email === email
    //             ? RegistrationProblem.EMAIL_TAKEN
    //             : RegistrationProblem.USERNAME_TAKEN;
    //     }
    //     return null;
    // }
}
