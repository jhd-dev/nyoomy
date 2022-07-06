import { createUnionType } from '@nestjs/graphql';
import { TagEntity } from '../../../tag/models/tag.entity';
import { TodoEntity } from '../../../todo/models/todo.entity';
import { SafeUser } from '../../../user/models/safe-user.model';

export const SearchResultUnion = createUnionType({
    name: 'SearchResult',
    types: () => [TodoEntity, TagEntity, SafeUser] as const,
    resolveType(value: { __typename: string }) {
        // eslint-disable-next-line no-underscore-dangle
        switch (value.__typename) {
            case 'Todo':
                return TodoEntity;
            case 'Tag':
                return TagEntity;
            case 'SafeUser':
                return SafeUser;
            default:
                return null;
        }
    },
});
