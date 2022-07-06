import { registerEnumType } from '@nestjs/graphql';

enum TaggableType {
    TODO = 'todo',
}

registerEnumType(TaggableType, { name: 'TaggableType' });

export default TaggableType;
