import { registerEnumType } from '@nestjs/graphql';

export enum SearchResultResourceType {
    TODO = 'TODO',
    TAG = 'TAG',
    USER = 'USER',
}

registerEnumType(SearchResultResourceType, {
    name: 'SearchResultResourceType',
    description: 'The types of resources a search result may include.',
});

export const searchResultResourceTypes = [
    SearchResultResourceType.TAG,
    SearchResultResourceType.TODO,
    SearchResultResourceType.USER,
];
