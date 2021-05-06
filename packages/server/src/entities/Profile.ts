import { ObjectType, Field } from 'type-graphql';
import { Entity, BaseEntity, Column } from 'typeorm';
import { User } from './User';

@ObjectType()
@Entity('profile')
export class Profile extends BaseEntity {}
