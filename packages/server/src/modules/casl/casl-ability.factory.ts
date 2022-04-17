import { Ability, AbilityBuilder } from '@casl/ability';
import { Injectable } from '@nestjs/common';
import Action from '../../types/enums/entity-action.enum';
import Role from '../../types/enums/role.enum';
import { Chat } from '../chat/models/chat.entity';
import { Message } from '../chat/models/message.entity';
import { Tag } from '../tag/models/tag.entity';
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
          | typeof Tag
          | typeof Todo
          | typeof Profile
          | typeof Chat
          | typeof Message
      >
    | 'all';

export type AppAbility = Ability<[Action, Subjects]>;

type FlatMetric<T extends { user: User }> = T & {
    'user.id': string;
};

@Injectable()
export class CaslAbilityFactory {
    public createForUser(
        user: User
    ): Ability<[Action, Subjects], MongoQuery<AnyObject>> {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        const { can, cannot, build } = new AbilityBuilder<
            Ability<[Action, Subjects]>
        >(Ability as AbilityClass<AppAbility>);

        switch (user.role) {
            case Role.ADMIN:
                can(Action.MANAGE, 'all').because(
                    'Admins have complete control of the database.'
                );
                cannot(Action.UPDATE, User, ['role'], {
                    id: user.id,
                }).because(
                    'Admins may not revoke their own authority; another admin must do so for them.'
                );
                cannot(Action.DELETE, User, { id: user.id }).because(
                    'Admin accounts require another admin account to delete.'
                );
                break;
            case Role.USER:
                can(Action.READ, Profile, {
                    id: { $exists: true },
                }).because('Users may view public profiles.');

                can(Action.MANAGE, Chat, {
                    members: { id: user.id },
                }).because('Users may manage their own chats.');

                can(Action.MANAGE, Message, {
                    sender: { id: user.id },
                }).because('Users may manage messages they have sent.');

                can(Action.READ, Message, {
                    chat: {
                        $elemMatch: {
                            members: { $elemMatch: { id: user.id } },
                        },
                    },
                }).because(
                    'Users may view messages in chats they have joined.'
                );

                can(Action.MANAGE, User, { id: user.id }).because(
                    'Users may manage themselves.'
                );

                cannot(Action.UPDATE, User, ['role']).because(
                    'Users may not gain undue authority.'
                );

                can<FlatMetric<Todo>>(Action.MANAGE, Todo, {
                    'user.id': user.id,
                }).because('Users may manage their own metrics.');

                can<FlatMetric<Tag>>(Action.MANAGE, Tag, {
                    'user.id': user.id,
                }).because('Users may manage their own tags.');
                break;
            default:
                throw new Error('User does not have a recognized role.');
        }

        return build({
            // Read https://casl.js.org/v5/en/guide/subject-type-detection#use-classes-as-subject-types for details
            detectSubjectType: (item) =>
                item.constructor as ExtractSubjectType<Subjects>,
        });
    }
}
