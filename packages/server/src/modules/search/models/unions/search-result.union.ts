import { createUnionType } from '@nestjs/graphql';
import { Tag } from '../../../tag/models/tag.entity';
import { Todo } from '../../../todo/models/todo.entity';
import { SafeUser } from '../../../user/models/safe-user.model';

export const SearchResultUnion = createUnionType({
    name: 'SearchResult',
    types: () => [Todo, Tag, SafeUser] as const,
    resolveType(value: { __typename: string }) {
        // eslint-disable-next-line no-underscore-dangle
        switch (value.__typename) {
            case 'Todo':
                return Todo;
            case 'Tag':
                return Tag;
            case 'SafeUser':
                return SafeUser;
            default:
                return null;
        }
    },
});
