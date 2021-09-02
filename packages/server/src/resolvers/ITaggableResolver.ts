import { Resolver } from 'type-graphql';
import { ITaggable } from '../types/interfaces/ITaggable';

@Resolver(() => ITaggable)
export class ITaggableResolver {}
