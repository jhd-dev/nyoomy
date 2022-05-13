import { InputType, OmitType, PartialType } from '@nestjs/graphql';
import { UserSettingsDto } from './user-settings.dto';

@InputType()
export class UpdateUserSettingsInput extends PartialType(
    OmitType(UserSettingsDto, ['user'] as const),
    InputType
) {}
