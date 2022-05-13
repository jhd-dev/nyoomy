import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import ThemePreference from '../../../types/enums/theme-preference.enum';
import { SafeUser } from '../models/safe-user.model';
import type { IUserSettings } from '../interfaces/user-settings.interface';

@ObjectType({ description: "Users' settings and preferences" })
export class UserSettingsDto implements IUserSettings {
    @Field(() => ID)
    public readonly id: string;

    @Field(() => SafeUser)
    public user: SafeUser;

    @Field()
    public language!: string;

    @Field(() => ThemePreference)
    public themePreference!: ThemePreference;

    @Field()
    public audioEnabled: boolean;

    @Field(() => Int)
    public globalVolume: number;

    @Field({ nullable: true })
    public pin?: string;

    @Field(() => Int, { nullable: true })
    public pinTimeout?: number;

    @Field()
    public isPublic!: boolean;
}
