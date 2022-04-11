import { Ability, AbilityBuilder } from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { EntityAction } from '../../types/enums/entity-action.enum';
import Role from '../../types/enums/role.enum';
import { Chat } from '../chat/models/chat.entity';
import { Message } from '../chat/models/message.entity';
import { Todo } from '../todo/models/todo.entity';
import { Profile } from '../user/models/profile.entity';
import { User } from '../user/models/user.entity';
import type {
    AbilityClass,
    ExtractSubjectType,
    InferSubjects,
    MongoQuery,
} from '@casl/ability';
import type { AnyObject } from '@casl/ability/dist/types/types';

type Subjects =
    | InferSubjects<
          | typeof User
          | typeof Todo
          | typeof Profile
          | typeof Chat
          | typeof Message
      >
    | 'all';

export type AppAbility = Ability<[EntityAction, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
    public createForUser(
        user: User
    ): Ability<[EntityAction, Subjects], MongoQuery<AnyObject>> {
        const { can, cannot, build } = new AbilityBuilder<
            Ability<[EntityAction, Subjects]>
        >(Ability as AbilityClass<AppAbility>);

        if (user.role === Role.ADMIN) {
            can(EntityAction.MANAGE, 'all').because(
                'Admins have complete control of the database.'
            );
        } else {
            can(EntityAction.READ, Profile, { id: { $exists: true } }).because(
                'Users may view public profiles.'
            );

            can(EntityAction.MANAGE, Chat, {
                members: { id: user.id },
            }).because('Users may manage their own chats.');

            can(EntityAction.MANAGE, Message, {
                sender: { id: user.id },
            }).because('Users may manage messages they have sent.');

            // can(EntityAction.READ, Message, {
            //     'chat.members': { $all: [{ id: user.id }] },
            // }).because('Users may view messages in chats they have joined.');

            can(EntityAction.MANAGE, User, { id: user.id }).because(
                'Users may manage themselves.'
            );

            can(EntityAction.MANAGE, Todo, {
                user: { id: user.id },
            }).because('Users may manage their own metrics.');
        }

        return build({
            // Read https://casl.js.org/v5/en/guide/subject-type-detection#use-classes-as-subject-types for details
            detectSubjectType: (item) =>
                item.constructor as ExtractSubjectType<Subjects>,
        });
    }
}
