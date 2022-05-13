import { Field, InputType, PartialType } from '@nestjs/graphql';
import { UserSettingsDto } from './user-settings.dto';

@InputType()
export class UpdateUserSettingsInput extends PartialType(UserSettingsDto) {
    @Field({ nullable: true })
    public _placeholderField?: string;
}
